/*import React, { FunctionComponent, useCallback, useRef, useState } from 'react';
import {
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
  Animated,
  useWindowDimensions,
  Easing,
  LayoutChangeEvent,
  TranslateXTransform,
  TranslateYTransform,
  ScaleYTransform,
} from 'react-native';
import { Product } from '../domain';
import { Button } from './Button';
import { FONT_COLOR } from './const';

export interface ProductCardProps {
  product: Product;
  onDelete?: (id: string) => void;
  style?: StyleProp<ViewStyle>;
  onPressName?: () => void;
  translateY?: Animated.Value;
  translateShrinks?: boolean;
}

export const ProductCard: FunctionComponent<ProductCardProps> = ({
  product,
  onDelete,
  onPressName,
  style,
  translateY,
  translateShrinks,
}) => {
  const { width: screenWidth } = useWindowDimensions();
  const { current: deleteAnimation } = useRef(new Animated.Value(0));
  const [height, setHeight] = useState<number | undefined>();

  const layoutChanged = useCallback((e: LayoutChangeEvent) => {
    setHeight(e.nativeEvent.layout.height);
  }, []);

  const deleteProduct = useCallback(() => {
    Animated.timing(deleteAnimation, {
      duration: 500,
      useNativeDriver: true,
      toValue: 1,
      easing: Easing.cubic,
    }).start(() => {
      onDelete?.(product.id);
    });
  }, [deleteAnimation, onDelete, product.id]);

  const transform: Animated.WithAnimatedArray<
    TranslateXTransform | TranslateYTransform | ScaleYTransform
  > = [
    {
      translateX: deleteAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -screenWidth],
      }),
    },
  ];

  if (translateY && height) {
    if (translateShrinks) {
      transform.push({
        scaleY: translateY.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
        }),
      });
    } else {
      transform.push({
        translateY: translateY.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -height],
        }),
      });
    }
  }

  return (
    <Animated.View onLayout={layoutChanged} style={[styles.container, style, { transform }]}>
      <Text style={styles.name} onPress={onPressName}>
        {product.name}
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      {onDelete ? (
        <Button style={styles.deleteButton} onPress={deleteProduct}>
          Delete
        </Button>
      ) : undefined}
    </Animated.View>
  );
};

const styles = StyleSheet.create<{
  container: ViewStyle;
  name: TextStyle;
  description: TextStyle;
  deleteButton: ViewStyle;
}>({
  container: {
    backgroundColor: '#FFF',
    padding: 14,
    borderRadius: 10,
  },
  name: {
    color: FONT_COLOR,
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    color: FONT_COLOR,
  },
  deleteButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
});
*/
