  import styled from 'styled-components';

  export const Container = styled.section`
    display: flex;
    justify-content: center;
    .form-control {
      margin-top: 6rem;
      width: 600px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      input {
        width: 200px;
        height: 30px;
        font-size: 20px;
        padding-left: 10px;
        border-radius: 6px;
        border: none;
        &:focus {
          outline: none;
          box-shadow: 0px 0px 6px green;
        }
      }
      label {
        font-size: 25px;
        font-weight: 600;
      }
      .error {
        box-shadow: 0px 0px 6px red;
        border-radius: 6px;
      }
    }
  `;

  export const Colors = styled.section`
    height: 50px;
    margin-top: 6rem;
    .list {
    min-height: calc(100vh - 100px);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
    }
    article {
    border: none;
    padding: 2rem 2rem;
    cursor: pointer;
    font-size: 1.3rem;
    text-transform: none;
    }
    span {
      font-size: 1.5rem;
      font-weight: 800;
      margin-top: 100px;
    }
    .color-light {
      color: white;
    }
  `;
