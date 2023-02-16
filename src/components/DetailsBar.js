import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';

const DetailsBarWrapper = styled.div`
  background-color: rgb(8, 8, 63);
  height: 100%;
  width: 35%;
  border-radius: 7px;
  overflow: auto;
  padding-left: 15px;
  position: relative;
`;

const TextWrapper = styled.div`
  width: 70%;
`;

const TextOne = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const TextTwo = styled.p`
  color: #fff;
  font-size: 12px;
  line-height: 18px;
`;

const SemiCircle = styled.div`
  bottom: 0;
  right: 0;
  position: absolute;
  margin-left: 10px;
  background-color: rgb(252, 113, 137);
  border-radius: 150px 0px 0px 0;
  height: 150px;
  width: 150px;
`;

const FullCircle = styled.div`
  height: 80px;
  width: 80px;
  background-color: rgb(100, 21, 173);
  border-radius: 100%;
  z-index: 22;
  margin-left: 10px;
`;

const ContactsWrapper = styled.a`
  display: flex;
  width: 200px;
  height: 10px;
  margin-top: 50px;
  cursor: pointer;
  text-decoration: none;
`;

const ContactText = styled.div`
  color: #fff;
  font-size: 15px;
  margin-left: 10px;
`;

const SocialsWrapper = styled.div`
  display: flex;
  width: 150px;
  height: 10px;
  justify-content: center;
  bottom: 30px;
  position: absolute;
  cursor: pointer;
`;

const SocialIconWrapper = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgb(252, 113, 137);
  }
`;

const DetailsBar = () => {
  return (
    <DetailsBarWrapper>
      <TextWrapper>
        <TextOne>Contact Information</TextOne>
        <TextTwo>Fill up the form and our team will get back to you within 24 hours</TextTwo>
      </TextWrapper>
      <div>
        <ContactsWrapper href="tel:+233543201893">
          <Icon.Phone size={15} color="rgb(252, 113, 137)" />
          <ContactText>+233543201893</ContactText>
        </ContactsWrapper>

        <ContactsWrapper href="mailto:aljay3334@gmail.com">
          <Icon.Mail size={15} color="rgb(252, 113, 137)" />
          <ContactText>aljay3334@gmail.com</ContactText>
        </ContactsWrapper>
      </div>

      <SocialsWrapper>
        <SocialIconWrapper href="https://www.facebook.com/profile.php?id=100021937291259">
          <Icon.Facebook color="#fff" size={20} />
        </SocialIconWrapper>
        <SocialIconWrapper href="https://www.instagram.com/_allenjones/">
          <Icon.Instagram color="#fff" size={20} />
        </SocialIconWrapper>
        <SocialIconWrapper href="https://www.linkedin.com/in/allen-jones-b799b7171/">
          <Icon.Linkedin color="#fff" size={20} />
        </SocialIconWrapper>
      </SocialsWrapper>

      <SemiCircle>
        <FullCircle></FullCircle>
      </SemiCircle>
    </DetailsBarWrapper>
  );
};

export default DetailsBar;
