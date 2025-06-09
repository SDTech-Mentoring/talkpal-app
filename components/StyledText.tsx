import { Text, TextProps } from './Themed';

export function MonoText({ style, ...props }: TextProps) {
  return (
    <Text
      {...props}
      style={[{ fontFamily: 'SpaceMono' }, style]}
    />
  );
}
