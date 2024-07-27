import styled from "styled-components";

export const BegginBackground = styled.div`
  background-color: var(--yellow01);
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;

  #login-mobile-logo {
    display: none;
  }

  #bottom-right-curve {
    display: none;
  }

  #top-left-curve {
    width: 360px;
    position: absolute;
    top: 0px;
    left: 0px;
    transition: all 0.5s;
  }

  #deco-bulbs {
    width: 120px;
    position: absolute;
    top: 0px;
    right: 160px;
    transition: all 0.5s;
  }

  #love-letter {
    width: 140px;
    position: absolute;
    bottom: 40px;
    left: 80px;
    transition: all 0.5s;
  }

  #dog-paws {
    width: 180px;
    position: absolute;
    bottom: 60px;
    right: 90px;
    transition: all 0.5s;
  }

  #right-curve {
    position: fixed;
    right: -10px;
    top: 0px;
    transition: all 0.5s;
    height: 100vh;
  }

  @media (max-width: 1200px) {
    #top-left-curve {
      position: absolute;
      top: -60px;
      left: -60px;
      transition: all 0.5s;
    }

    #deco-bulbs {
      width: 100px;
      top: 0px;
      right: 100px;
    }

    #love-letter {
      position: absolute;
      bottom: 20px;
      left: 20px;
      transition: all 0.5s;
    }

    #dog-paws {
      width: 120px;
      position: absolute;
      bottom: 80px;
      right: 10px;
      transition: all 0.5s;
    }

    #right-curve {
      right: -60px;
    }
  }

  @media (max-width: 770px) {
    flex-direction: column;
    gap: 40px;
    padding: 0;

    #right-curve {
      display: none;
    }

    #deco-bulbs {
      display: none;
    }

    #login-mobile-logo {
      display: block;
      width: 200px;
    }

    #top-left-curve {
      top: -20px;
      left: -40px;
    }

    #dog-paws {
      width: 150px;
      top: 10px;
      right: 10px;
    }

    #love-letter {
      width: 100px;
      bottom: 20px;
      left: 40px;
    }

    #bottom-right-curve {
      display: block;
      position: fixed;
      bottom: -50px;
      right: -30px;
      transition: all 0.5s;
    }
  }

  @media (max-width: 550px) {
    #top-left-curve {
      top: -50px;
      left: -80px;
    }

    #dog-paws {
      width: 120px;
      top: 10px;
      right: 10px;
    }

    #love-letter {
      width: 100px;
      bottom: 10px;
      left: 10px;
    }

    #bottom-right-curve {
      bottom: -80px;
      right: -80px;
    }
  }

  @media (max-width: 400px) {
    #top-left-curve {
      left: -130px;
      top: -50px;
      transform: rotate(10deg);
    }

    #dog-paws {
      width: 100px;
      top: 0px;
      right: 0px;
    }

    #love-letter {
      width: 80px;
      bottom: 10px;
      left: 10px;
    }

    #bottom-right-curve {
      position: fixed;
      bottom: -100px;
      right: -100px;
      transform: rotate(-10deg);
    }
  }
`;
