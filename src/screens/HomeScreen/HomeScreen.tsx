import Input from 'components/Input';
import {User} from 'models/User';
import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {UserRepository} from 'repository/UserRepository';
import styled from 'styled-components';
import emailRegex from 'utils/emailRegex';
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import { MainStackScreenNames } from 'navigation/MainStack';

type ScreenProps = {
  navigation: NavigationProp<ParamListBase>
}

const ScreenContainer = styled(View)`
  padding-top: 15px;
`;

const HeaderContainer = styled(View)`
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled(Text)`
  color: #339;
  font-size: 24px;
`;

const HeaderDescription = styled(Text)`
  color: #5a5a5a;
  font-size: 16px;
`;

const FormContainer = styled(View)`
  padding: 12px 14px;
`;

const InvalidEmailMessage = styled(Text)`
  color: #f66;
  margin-bottom: 5px;
`;

const HomeScreen = ({navigation}: ScreenProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false)
  const userRepo = new UserRepository();

  useEffect(() => {
    setIsValidEmail(handleIsValidEmail(email))
  }, [email])

  const handleIsValidEmail = (emailToBeVerified: string): boolean => {
    const verifiedEmail: boolean = emailRegex.test(emailToBeVerified)
    return verifiedEmail
  };

  const handleOnSubmit = () => {
    if (isValidEmail && name.length > 0) {
      const user = new User({name, email});
      userRepo.setUser(user);
      navigation.navigate('ProfileScreen')
    }
  };

  return (
    <ScreenContainer>
      <HeaderContainer>
        <HeaderTitle>Olá Outsmarters!</HeaderTitle>
        <HeaderDescription>Sejam bem vindos a Tech Tônica :)</HeaderDescription>
      </HeaderContainer>
      <FormContainer>
        <Input onChangeText={setName} placeholder={"Digite seu nome"} />
        <Input
          onChangeText={setEmail}
          placeholder="Digite seu email"
        />
        {email.length > 0 && !isValidEmail && (
          <InvalidEmailMessage>
            Por favor, digite um email válido. Ex: nome@provedor.com
          </InvalidEmailMessage>
        )}
        <Button
          disabled={!isValidEmail}
          onPress={handleOnSubmit}
          title="Continuar"
        />
      </FormContainer>
    </ScreenContainer>
  );
};

export default HomeScreen;
