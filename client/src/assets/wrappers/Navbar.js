import styled from "styled-components";

const Wrapper = styled.nav`
  .navbarItems {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    padding: 0 30px;
    background-color: #393e46;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
    width: 95%;
    height: 80px;
    border-radius: 13px;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
  .logo {
    color: #c6de41;
    justify-self: start;
    cursor: pointer;
    background-color: #393e46;
  }
  .nav-menu {
    display: grid;
    grid-template-columns: repeat(7, auto);
    list-style: none;
    align-items: center;
    text-align: center;
    justify-content: end;
  }
  .nav-links {
    text-decoration: none;
    background-color: #393e46;
    color: #eeeeee;
    padding: 0.7rem 1rem;
    white-space: nowrap;
  }
  .nav-links:hover {
    color: #00adb5;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
  }
  .active {
    color: #00adb5;
  }
  .nav-links svg {
    background-color: #393e46;
    margin-right: 6px;
    vertical-align: text-top;
  }
`;
export default Wrapper;
