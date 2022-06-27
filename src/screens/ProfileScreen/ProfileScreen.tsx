import React from 'react'
import { Text, View } from 'react-native'
import { UserRepository } from 'repository/UserRepository'
import styled from 'styled-components';

const NameContainer = styled(View)`
  background-color: #f66;
  padding: 24px;
`;

const TextName = styled(Text)`
  color: #fff;
`;

const ProfileScreen = () => {
  const userRepo = new UserRepository()
  const user = userRepo.getUser()

  return (
    <NameContainer>
      <TextName>{user.name}</TextName>
    </NameContainer>
  )

}

export default ProfileScreen