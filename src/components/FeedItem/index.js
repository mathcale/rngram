import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import * as Animatable from 'react-native-animatable';
const AnimatedIcon = Animatable.createAnimatableComponent(Icon)

import styles from './styles';

import { colors } from '../../utils';

const FeedItem = props => {
  const { user, photo, stats, posted_at } = props.post;

  const avatar = require(`../../assets/images/mock-posts/avatar.jpg`);
  const _photo = require(`../../assets/images/mock-posts/mock-posts-1.jpg`);

  const [lastTap, setLastTap] = useState(null);
  const [showBigLike, setShowBigLike] = useState(false);

  const handleDoubleTap = () => {
    const now = Date.now();

    if (lastTap && (now - lastTap) < 300) {
      setShowBigLike(true);

      setTimeout(() => {
        this.animatedIcon.fadeOut(300)
          .then(endState => {
            endState.finished &&
              setShowBigLike(false);
          });
      }, 500);
    } else {
      setLastTap(now);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Image source={avatar} style={styles.avatar} />
        <Text style={styles.username}>{user.username}</Text>

        <TouchableOpacity
          onPress={() => alert('sup fam')}
          activeOpacity={0.8}
          style={styles.options}
        >
          <Icon name="options-vertical" size={16} color={colors.black} />
        </TouchableOpacity>
      </View>

      <View style={styles.photoContainer}>
        <TouchableWithoutFeedback onPress={handleDoubleTap}>
          <ImageBackground source={_photo} style={styles.photo} resizeMode="cover">
            {showBigLike &&
              <AnimatedIcon
                ref={animatedIcon => {
                  this.animatedIcon = animatedIcon
                }}
                name="heart"
                size={128}
                color={colors.white}
                animation="zoomIn"
                duration={300}
                style={styles.bigLike}
              />
            }
          </ImageBackground>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.interactionsContainer}>
        <TouchableOpacity onPress={() => alert('like')} activeOpacity={0.8} style={styles.interactionIcon}>
          <Icon name="heart" size={28} color={colors.black} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('comment')} activeOpacity={0.8} style={styles.interactionIcon}>
          <Icon name="bubble" size={28} color={colors.black} />
        </TouchableOpacity >

        <TouchableOpacity onPress={() => alert('send to')} activeOpacity={0.8} style={styles.interactionIcon}>
          <Icon name="paper-plane" size={28} color={colors.black} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('bookmark')} activeOpacity={0.8} style={[styles.interactionIcon, styles.isBookmarkIcon]}>
          <Icon name="tag" size={28} color={colors.black} />
        </TouchableOpacity>
      </View>

      <View style={styles.postFooter}>
        <Text style={styles.likeCounter}>{stats.likes} likes</Text>

        {stats.description &&
          <View style={styles.descriptionContainer}>
            <Text style={styles.footerUsername}>{user.username}</Text>
            <Text style={styles.description}>{stats.description}</Text>
          </View>
        }

        <Text style={styles.date}>{posted_at}</Text>
      </View>
    </View>
  );
}

export default FeedItem;
