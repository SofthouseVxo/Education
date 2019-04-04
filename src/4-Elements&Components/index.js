import React, { Component, Fragment } from 'react';
import AsClassComponent from './components/AsClassComponent';
import AsFunctionComponent from './components/AsFunctionComponent';
import ChildrenComponent from './components/ChildrenComponent';
import ComposingComponent from './components/ComposingComponent';
import PropsComponent from './components/PropsComponent';
import DialogComponent from './components/DialogComponent';

class ElementsComponents extends Component {
  render() {

    const robin = 'jättestark';

    return (
      <Fragment>
        <AsFunctionComponent/>
        <AsClassComponent/>
        <PropsComponent stark={robin} hello={12+34} myText="hello I end up in props"/>
        <ChildrenComponent myText="hello I end up in props">
          <div id="hello">
            <p>In child</p>
          </div>
        </ChildrenComponent>
        <ComposingComponent
          left={(
            <ChildrenComponent>
              <div>
                <p>Child in composing child</p>
              </div>
            </ChildrenComponent>
          )}
          right={<AsFunctionComponent/>}
        />
        <DialogComponent
          headerText="the header of my dialog"
          contentText="the content of my dialog"
        >
          <AsFunctionComponent/>
        </DialogComponent>
      </Fragment>
    );
  }
}

export default ElementsComponents;
