import React from 'react';
import PageWithContext from '../components/PageWithContext';
import DefaultLayout from '../components/Layouts';
import HtmlHead from '../components/HtmlHead';
import HeaderApi from '../components/HeaderApi';
import MyLinks from '../components/MyLinks';
import fetch from 'isomorphic-unfetch';

const Style = {
    textAlign: "center",
    color: "lightgray"
}

const SearchApi = (props) => (
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
                <h1 style={Style}>В процессе разработки!</h1>
           </div>
        </div>
      </DefaultLayout>
)

export default SearchApi