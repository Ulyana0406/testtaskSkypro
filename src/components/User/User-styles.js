import { styled } from "styled-components";

export const User = styled.div`
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    
    transition: all 0.15s linear;
    
    &:hover {
        box-shadow: 2px 2px 2px 2px  blue;
    }

    
`;
export const MainInfo = styled.div`
    display: flex;
    align-items: center;
`;
export const Avatar = styled.img`
    width: 50px;
    height: 50px;
`;
export const Login = styled.div`
    margin-left: 10px;
`;
export const CountOfReps = styled.div``;
export const ModalHeader = styled.header`
  display: flex;
  justify-content: flex-end;
`;
export const ModalHeaderTitle = styled.h1``;
export const ModalHeaderClose = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 3%;
  right: 3%;
`;
export const ModalUserInf = styled.section`
`;
export const ModalUserMainInf = styled.div`
    margin-bottom: 45px;
`;
export const ModalUserAvatar = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 60px;
`;
export const ModalUserName = styled.p``;
export const ModalUserLogin = styled.p``;
export const ModalUserEmail = styled.p``;
export const ModalUserId = styled.p``;
export const ModalUserFollowers = styled.p``;
export const ModalUserFollowings = styled.p``;
export const ModalUserRepositories = styled.p``;
export const ModalUserGitHub = styled.a``;
export const ModalUserCreatedOn = styled.p``;
export const ModalUserUpdatedOn = styled.p``;
