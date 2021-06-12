import styled from 'styled-components';

export const BodyLogin = styled.div`
    max-width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    & img{
        position: fixed;
        top:0;
        right:0;
        height: 100vh;
    }
`;

export const FilterImage = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(1,49,69);
    background: linear-gradient(90deg, rgba(1,49,69,1) 30%, rgba(0,36,50,0.85) 100%);
    z-index: 1;

    @media (max-width:754px){
        background: linear-gradient(90deg, rgba(1,49,69,1) 0%, rgba(0,36,50,0.85) 100%);
    }
`

export const ContainerLogin = styled.div`
    position: relative;
    z-index: 2;
    width: auto;

    display: flex;
    flex-wrap: wrap-reverse!important;

    @media (min-width:1050px) {
        width: 1000px;
    }
    @media (min-width:755px) and (max-width:1049px) {
        justify-content: center;
        width: 720px;
    }
    @media (max-width:754px){
        justify-content: center;
        overflow-y: hidden;
        width: 100%;
        overflow: hidden;
    }

    margin-bottom: .5rem!important;
    padding: 0 25px;
    margin-right: -12px;
    margin-left: -12px;
`;

export const ContainerContent = styled.div`
    width: 50%;

    position: relative;
    overflow: hidden;
    margin-bottom: 1.5rem;
    
    display: flex;
    flex-direction: column;
    padding: 1.5rem;

    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0%;

    @media (max-width:768px) {
        width: 100%;
        max-width: 100%;
        flex: 0 0 auto;
    }

    & ul{
        display: flex;
        flex-direction: row;
        padding-left: 0;
        align-items: center;
        
        & a{
            text-decoration: none;
            margin-right: 20px;
        }
    }

    & form{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;

        & input{
            background: none;
            border: none;
            border-bottom: 1px solid #e5e5e5;
            margin-top: 30px;
            padding: 5px 0px 5px 5px;
            outline: none;
            transition: 0.2s;
            transition-delay: 0.1s;
            color: #fff;

            &:focus{
                background-color: #140f0849;
                border-radius: 3px;
            }

            &::-webkit-input-placeholder {
                color: #be956779;
            }
            &:-moz-placeholder{
                color: #be956779;
            }
            &::-moz-placeholder{
                color: #be956779;
            }
            &:-ms-input-placeholder{
                color: #be956779;
            }
        }
    }

    & button{
        width: 100%;
        height: 40px;

        cursor: pointer;

        background: #BE9667;

        border-radius: 20px;
        border: none;
        margin-top: 75px;

        font-family: 'Lato';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.16px;

        color: #E0E0E0;

        transition: 0.5s;

        &:hover{
            background: #727272;
        }
    }
`;

export const ListLogin = styled.li`
    list-style: none;
    padding: ${props => (props.active ? '3px 5px' : '')};
    border-bottom: ${props => (props.active ? '2px solid #BE9667' : '')};
    color: ${props => (props.active ? '#e5e5e5' : '#949494')};
    font-weight: ${props => (props.active ? '700' : '400')};
    text-decoration: none;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    font-family: 'Lato', sans-serif;

    &:hover{
        color: ${props => (props.active ? '#e5e5e5' : '#1C86A4')};
    }
`;

export const Forget = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    & a{
        color: #949494;

        text-decoration: none;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        font-family: 'Lato', sans-serif;

        &:hover{
            color: #1C86A4;
        }

        @media (min-width:768px) and (max-width:1050px) {
            font-size: 9px;
        }
    }


`;

export const Brand = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-end;

    & h1{
        font-family: 'Dancing Script', serif;
        font-style: normal;
        font-weight: 600;
        font-size: 46px;
        line-height: 29px;
        margin-bottom: 10px;
        color: #BE9667;
    }

    & p{
        font-family: 'Lato', serif;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;

        color: #e5e5e5;

        margin-top: 0px;
        margin-bottom: 0px;
    }
`