import Head from 'next/head';
import React from 'react';

export default ({}) => {
  if (typeof window !== `undefined`)
    window.location.replace(
      `https://zoom.us/j/7865414444?pwd=VG5GeVIyaVE2VWhWUmI5RHZqbkFXdz09`
    );
  return (
    <div>
      {/* <Helmet title="Join My Personal Zoom Meeting"></Helmet> */}
      <Head>
        <title>Join My Personal Zoom Meeting</title>
      </Head>
      <div class="flex items-center justify-center h-screen" style={{}}>
        <p
          className="text-black dark:text-white"
          style={
            {
              //   display: 'flex',
              //   alignItems: 'center',
              //   justifyContent: 'center',
              //   height: '50vh'
            }
          }
        >
          You should be redirected...
        </p>
      </div>
    </div>
  );
};
