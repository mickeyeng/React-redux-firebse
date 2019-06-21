import styled from 'styled-components'

export const StyledAuthForm = styled.form`
    width: 100%;
    background: white;
    padding: 2rem;

    h2 {
        font-weight: 500;
        margin: 20px 0;
    }

    div {
        label {
            display: block;
            color: #9e9e9e;
            font-weight: 200;

            :focus {
                color: #26a69a;
            }
        }
    
        input {
            color: rgba(0,0,0,0.42);
            border: none;
            border-bottom: 1px dotted rgba(0,0,0,0.42);
            width: 100%;
            outline: none;
            margin-bottom: 1rem;
            font-size: 16px;
    
            :focus {
                border-bottom: 1px solid #26a69a;
                -webkit-box-shadow: 0 1px 0 0 #26a69a;
                box-shadow: 0 1px 0 0 #26a69a;
            }
        }

        textarea {
            line-height: normal;
            overflow-y: hidden;
            padding: .8rem 0 .8rem 0;
            resize: none;
            min-height: 3rem;
            width: 100%;
            background-color: transparent;
            border: none;
            border-bottom: 1px dotted rgba(0,0,0,0.42);
            border-radius: 0;
            outline: none;
            height: 3rem;
            width: 100%;
            font-size: 16px;
            margin: 0 0 8px 0;


            :focus {
                border-bottom: 1px solid #26a69a;
                -webkit-box-shadow: 0 1px 0 0 #26a69a;
                box-shadow: 0 1px 0 0 #26a69a;
            }
        }

    }
    
`

export const Button = styled.button`
    height: 54px;
    line-height: 54px;
    font-size: 15px;
    padding: 0 28px;
    text-decoration: none;
    color: #fff;
    background-color: #e91e63;
    text-align: center;
    letter-spacing: .5px;
    outline: none;
    border: none;
    text-transform: uppercase;
    margin: 20px 0;
`