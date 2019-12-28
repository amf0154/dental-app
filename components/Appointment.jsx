import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';


const Appointment = ({ id, avatar, fullname, diagnosis, time, active }) => {
    return (<GroupBlock>
      <GroupItem key={id}>
        <Avatar source={{uri: avatar}} />
        <View style={{flex: 1}}>
          <FullName>{fullname}</FullName>
          <GrayText>{diagnosis}</GrayText>
        </View>
        <GroupDate active={active}>{time}</GroupDate>
    </GroupItem>
 
  </GroupBlock>);
}

export default Appointment;

const GroupBlock = styled.View`
  margin-bottom: 25px;
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
  font-weight: bold;
  font-size: 16px;
  color: #000000;
`;
const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

const GrayText = styled.Text`
  font-size: 16px;
  color: gray;
`;
const GroupDate = styled.Text`
  font-weight: bold;
  font-size: 16px;
  border-radius: 18px;
  color: ${props => props.active ? '#ffffff' : '#4294ff'};
  background: ${props => props.active ? '#2a86ff' : '#e9f5ff'};
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 30px;
`;

Appointment.defaultProps = {
    title: 'Untitled',
    items: []
}