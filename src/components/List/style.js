import styled from 'styled-components'
export const ArticlListStyle=styled.div`
    .articl_title{
        font-size: 18px;
        font-weight: 700;
    }
    .articl_author{
        color:#B4B4B4
    }
    .articl_title:hover{
        text-decoration:underline;
        color:#333
    }
    .articl_more_btn{
        height: 40px;
        margin: 30px auto 60px;
        
        text-align: center;
        font-size: 15px;
        width: 100%;
        border-radius: 20px;
        background-color: #a5a5a5;
        color:#fff;
      
    }
    .articl_more_btn:hover{
        border:none
    }
`