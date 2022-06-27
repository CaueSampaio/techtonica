import React from 'react';
import HomeScreen from '../HomeScreen';
import {render, fireEvent} from '@testing-library/react-native';
import {UserRepository} from 'repository/UserRepository';
import {User} from 'models/User';

const userRepo = new UserRepository();

// Mock da função de navegação que será passada por props na renderização do elemento
const navigation = {
  navigate: jest.fn(),
};

// Renderização da tela
// Aqui passamos nosso mock como prop, então quando nossos testes forem executados, podemos
// testar se a função passada é chamada corretamente
const renderHomeScreen = () => render(<HomeScreen navigation={navigation} />);

describe('Success tests', () => {
  test('Should send user to ProfileScreen with corret input', () => {
    const {getByText, getByPlaceholderText} = renderHomeScreen();

    // Teste exemplo apenas para validar a renderização de textos trunkados na tela
    const header = getByText('Olá Outsmarters!');
    expect(header).toBeTruthy();

    // Aqui já pegamos os inputs desejados que fazem parte do nosso caso de uso descrito
    const nameInput = getByPlaceholderText('Digite seu nome');
    const emailInput = getByPlaceholderText('Digite seu email');

    // Como os inputs são renderizados "vazios", disparamos alguns eventos para alterar
    // o valor dos nossos inputs, simulando a ação do usuário
    fireEvent.changeText(nameInput, 'Caue');
    fireEvent.changeText(emailInput, 'caue.sampaio@outsmartdigital.com.br');

    // O próximo passo é apertar o botão, pra isso precisamos encontrar ele na tela
    const continueButton = getByText('Continuar');
    // Após inserirmos os valores desejados e ter nosso botão definido
    // simulamos o press do botão utilizando a função fireEvent, passando o botão como param
    fireEvent.press(continueButton);

    // Ao pressionar o botão, esperamos que os dados do usuário tenham sido persistidos
    // no nosso repositório, ficando disponível para a próxima tela por exemplo
    const userInRepo = userRepo.getUser();
    expect(userInRepo).toStrictEqual(
      new User({name: 'Caue', email: 'caue.sampaio@outsmartdigital.com.br'}),
    );

    // A ultima etapa do nosso teste é garantir que o usuário foi encaminhado
    // para a página seguinte
    expect(navigation.navigate).toHaveBeenCalledWith('ProfileScreen');
  });
});

describe('Failure tests', () => {
  test('Should not show invalid message on render', () => {
    const {queryByText} = renderHomeScreen()
    const errorMessageBeforeFireEvent = queryByText('Por favor, digite um email válido. Ex: nome@provedor.com')
    expect(errorMessageBeforeFireEvent).toBeFalsy()
    expect(errorMessageBeforeFireEvent).not.toBeTruthy()
  })

  test('Should show invalid email message', () => {
    const {getByPlaceholderText, findByText} = renderHomeScreen()

    const emailInput = getByPlaceholderText('Digite seu email')
    fireEvent.changeText(emailInput, 'caue')

    const errorMessage = findByText('Por favor, digite um email válido. Ex: nome@provedor.com')
    expect(errorMessage).toBeTruthy()
  });
});
