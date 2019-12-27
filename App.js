import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
export default function App() {
  return (
    <Container>
      <Group>
        <GroupTitle> 11 september</GroupTitle>
        <GroupItem>
        <Avatar source={{uri: 'https://gta5.su/wp-content/uploads/2013/12/v_michael_jetski_256x256.jpg'}} />
          <View style={{flex: 1}}>
          <FullName>Анна Александровна</FullName>
          <GrayText>пульпит, хрень какая-то</GrayText>
          </View>
          <GroupDate active>12:30</GroupDate>
        </GroupItem>

        <GroupItem>
        <Avatar source={{uri: 'https://gta5.su/wp-content/uploads/2013/12/v_michael_jetski_256x256.jpg'}} />
          <View style={{flex: 1}}>
          <FullName>Анна Александровна</FullName>
          <GrayText>пульпит, хрень какая-то</GrayText>
          </View>
          <GroupDate>12:30</GroupDate>
        </GroupItem>
      </Group>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;

const Group = styled.View`
  padding: 0 20px;
`;

const GroupItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;
const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: #000000;
`;
const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

const GroupTitle = styled.Text`
  font-weight: 800;
  font-size: 22px;
  color: #000000;
`;

const GrayText = styled.Text`
  font-size: 16px;
  color: gray;
`;
const GroupDate = styled.Text`
  font-weight: 600;
  font-size: 14px;
  border-radius: 18px;
  color: ${props => props.active ? '#ffffff' : '#4294ff'};
  background: ${props => props.active ? '#2a86ff' : '#e9f5ff'};
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 28px;
`;