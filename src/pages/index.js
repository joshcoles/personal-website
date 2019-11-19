import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/Hero/Hero.js';
import Description from '../components/Description/Description.js';

export default () => {
  return (
    <Layout>
      <Hero />
      <Description />
      <div style={{ color: 'purple' }}>
        <h1>Hello World!</h1>
        <p>Canucks main street vancouver gastown arby's whitecaps developers property expensive cambie developers developers false creek gastown vancouverites skytrain lions translink ramen sedins vancouver rain whitecaps heading up to whistler lions false creek granville developers I just need to be close to the mountains developers cambie granville.</p>
        <img src="https://placebear.com/g/300/300" alt="test"/>
      </div>
    </Layout>
  )
}
