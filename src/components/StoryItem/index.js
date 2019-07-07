import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
const AnimatedImage = Animatable.createAnimatableComponent(Image);

import styles from './styles';

export default class StoryItem extends Component {
  constructor(props) {
    super(props);

    this.handleOnPressIn = this.handleOnPressIn.bind(this);
    this.handleOnPressOut = this.handleOnPressOut.bind(this);
  }

  handleOnPressIn() {
    this.animatedImage.transitionTo({
      scale: 0.9,
    });
  }

  handleOnPressOut() {
    this.animatedImage.transitionTo({
      scale: 1,
    });

    alert(`view story from ${this.props.self ? 'yourself' : this.props.story.user.username}`);
  }

  render() {
    const { self } = this.props;
    const { user, stories, seenAll } = this.props.story;

    const userAvatar = require('../../assets/images/mock-posts/avatar.jpg');
    const mockAvatars = {
      'japassou': require('../../assets/images/mock-posts/avatar-2.jpg'),
      'reactjs': require('../../assets/images/mock-posts/avatar-3.png'),
    }

    let avatarStyles = null;

    if (stories.length > 0 && !seenAll) {
      avatarStyles = styles.avatarHasStories;
    } else if (stories.length > 0 && seenAll) {
      avatarStyles = styles.avatarSeenAllStories;
    } else if (self && stories.length === 0) {
      avatarStyles = styles.avatarSelfNoStories;
    } else if (!self && stories.length === 0) {
      avatarStyles = styles.avatarNoStories;
    }

    return (
      <View style={styles.storyItemContainer}>
        <TouchableWithoutFeedback
          onPressIn={this.handleOnPressIn}
          onPressOut={this.handleOnPressOut}
        >
          <View>
            <View style={avatarStyles}>
              <AnimatedImage
                source={this.props.self ? userAvatar : mockAvatars[user.username]}
                resizeMode="contain"
                ref={animatedImage => {
                  this.animatedImage = animatedImage;
                }}
                duration={300}
                style={styles.avatar}
              />
            </View>

            {(self && stories.length === 0) &&
              <View style={styles.plusWrapper}>
                <Text style={{ color: '#fff', fontSize: 11 }}>+</Text>
              </View>
            }
          </View>
        </TouchableWithoutFeedback>

        <Text style={styles.username}>{this.props.self ? 'My story' : user.username}</Text>
      </View>
    );
  }
}
