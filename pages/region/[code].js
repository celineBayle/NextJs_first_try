import React from 'react';
import { Layout } from '../../components/layout';
import { useRouter } from 'next/router';
import axios from 'axios';
import Head from 'next/head';

const CodeRegion = ({ data }) => {
  return (
    <>
      {data && (
        <>
          <Head>
            <title>{data.nom}</title>
          </Head>
          <Layout>
            <h1>Région: {data.nom}</h1>
            <p>Code: {data.code}</p>
          </Layout>
        </>
      )}
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const code = params.code;
  const url = 'https://geo.api.gouv.fr';
  const { data } = await axios.get(`${url}/regions/${code}`);

  return {
    props: {
      data,
    },
  };
};
export default CodeRegion;
