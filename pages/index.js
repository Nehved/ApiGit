import React from 'react';
import PageWithContext from '../components/PageWithContext';
import DefaultLayout from '../components/Layouts';
import HtmlHead from '../components/HtmlHead';
import Link from 'next/link';
import HeaderApi from '../components/HeaderApi';
import MyLinks from '../components/MyLinks';

export default class extends PageWithContext {
  render() {
    return (
      <DefaultLayout>
        <HtmlHead
          pageTitle="Home page"
          metaDescription="Page meta description"
          metaKeywords="Page meta keywords"
        />
        <div>
          <HeaderApi />
          <MyLinks />
        </div>
      </DefaultLayout>
    );
  }
}
