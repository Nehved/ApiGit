import React from 'react';
import PageWithContext from '../components/PageWithContext';
import DefaultLayout from '../components/Layouts';
import HtmlHead from '../components/HtmlHead';
import HeaderApi from '../components/HeaderApi';
import MyLinks from '../components/MyLinks';
import fetch from 'isomorphic-unfetch';

const ImageStyle = {
    with: "200px",
    display: "block",
    margin: "auto",
    borderRadius: "50%"
}

const HStyle = {
    textAlign: "center",
    fontFamily: "Arial"
}

const SpanStyle = {
    color: "brown"
}

const MyApi = (props) => (
    <DefaultLayout>
        <HtmlHead
          pageTitle="About us"
          metaDescription="Page meta description"
          metaKeywords="Page meta keywords"
        />
        <div>
          <HeaderApi />
          <MyLinks />
           <div>
                <img style={ImageStyle} src={props.info.avatar_url}/>
                <h1 style={HStyle}>Никнейм пользователя: <span style={SpanStyle}>{props.info.login}</span></h1>
                <h1 style={HStyle}>Имя пользователя: <span style={SpanStyle}>{props.info.name}</span></h1>
                <h1 style={HStyle}>Место проживания: <span style={SpanStyle}>{props.info.location}</span></h1>
                <h1 style={HStyle}>Количество репозиториев: <span style={SpanStyle}>{props.info.public_repos}</span></h1>
                <h1 style={HStyle}>Количество фолловеров: <span style={SpanStyle}>{props.info.followers}</span></h1>
           </div>
        </div>
      </DefaultLayout>
)

MyApi.getInitialProps = async function() {
    const res = await fetch('https://api.github.com/users/Nehved');
    const data = await res.json()
    
    console.log(`Show data fetched. Count: ${data.length}`)
    
    return {
        info: data
    }
}

export default MyApi

