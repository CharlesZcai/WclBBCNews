/**
 * Created by wangchenlong on 16/4/26.
 */
'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import moment from 'moment';

import Feed from './Feed.js';
import StoryDetail from 'StoryDetail.js';

class Story extends Component {

  static propTypes = {
    name: React.PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {

    var story = this.props.story;

    return (
      <View>
        <Text style={{flex:1}}>
          HelloWorld!
        </Text>
      </View>
    );
  }
}

export default Story;