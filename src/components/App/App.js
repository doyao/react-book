import React, { PureComponent } from 'react'
import {Row, Col} from 'antd'
import {get} from '../../utils/request'
import LoadMoreList from '../List'
import {ArticlLayout} from './style'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import BottomList from '../Bottom'
const count = 3;
export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      initLoading: true,
      loading: false,
      data: [],
      list: [],
    }
  }
  
  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, title: {}}))),
    });
    this.getData(res => {
      const data = this.state.data.concat(res.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
    console.log(this.state.list)
  };
  getData(){
    get("api/articleMore.json",'').then(res => {
      return res
    })
  }
  componentDidMount() {
    get("api/article.json",'').then(res => {
      this.setState({
        list:res,
        initLoading: false
      })
    })
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route>
          <ArticlLayout>
          <Row>
          <Col span={16}>
            <LoadMoreList
              list={this.state.list}
              initLoading={this.state.initLoading}
              loading={this.state.loading}
              onLoadMore={this.onLoadMore}
              />
            <BottomList/>
          </Col>
          <Col span={7} offset={1}>col-8</Col>
          </Row>
        </ArticlLayout>
        </Route>
      </Switch>
      </BrowserRouter>
    )
  }
}
