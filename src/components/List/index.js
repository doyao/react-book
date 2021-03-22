import React from 'react'
import { List,Skeleton,Space,Button} from 'antd';
import {Link} from 'react-router-dom'
import {
  SketchOutlined,
  LikeOutlined,
  MessageOutlined,
  PayCircleOutlined
}from '@ant-design/icons'
import {ArticlListStyle} from './style'
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
function LoadMoreList(props){
    const { initLoading, list,loading,onLoadMore} = props;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button className="articl_more_btn" onClick={onLoadMore}>阅读更多</Button>
        </div>
      ) : null;
    return (
      <ArticlListStyle>
        <List
        loading={initLoading}
        itemLayout="vertical"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item
            actions={[
              <IconText icon={SketchOutlined} text={item.zuan}/>,
              <Link to='/articl' className='articl_author'>{item.author}</Link>,
              <IconText icon={MessageOutlined} text={item.msg}/>,
              <Link to='/articl' className='articl_author'><IconText icon={LikeOutlined} text={item.love}/></Link>,
              <IconText icon={PayCircleOutlined} text={item.shang}/>,
            ]}
            extra={
              item.img ? <Link to='/articl'><img width={150} alt="logo" src={item.img}/></Link>:''
            }
          >
            <Skeleton title={false} loading={loading} active>
              <List.Item.Meta
                title={<Link to='/articl' className='articl_title'>{item.title}</Link>}
                description={item.desc}
              />
            </Skeleton>
          </List.Item>
        )}
      />
      </ArticlListStyle>
    )
  
}
export default LoadMoreList