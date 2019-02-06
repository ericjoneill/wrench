
let SearchContainer = styled.div`
    width: 26%;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 3% 0 3%;

    @media only screen and (max-width: 800px) {
        width: 45%;

        input {
            height: 30px !important;
            font-size: 10px !important;
            font-weight: normal !important;
            padding: 0 10px 0 25px !important;
            background-size: 14px 14px !important;
            background-position: 5px !important;
        }

        button {
            width: 30px !important;
            height: 30px !important;
            border: none;
            font-size: 18px;
            font-weight: lighter;
            background-color: #5e001e;
            color: white;
            cursor: pointer;
            margin: 2px 0 0 0 !important;
            background-position: center;
            background-image: url('http://www.clker.com/cliparts/n/U/H/1/H/u/search-icon-white-one-hi.png');
            background-size: 20px !important;
        }
    }
    input {
        width: 90%;
        height: 40px;
        font-size: 18px;
        font-weight: lighter;
        box-sizing: border-box;
        padding: 0 20px 0 45px;
        border: none;
        background-image: url('https://founderspledge.com/assets/tool-eb55fd48ba43e5215980829385a8058d2ec5f357ab63be0d4c7758ccf0a4db77.svg');
        background-repeat: no-repeat;
        background-size: 24px 24px;
        background-position: 10px;
        border-radius: 2px;
    }

    button {
        width: 40px;
        height: 40px;
        border: none;
        font-size: 18px;
        font-weight: lighter;
        background-color: #5e001e;
        color: white;
        cursor: pointer;
        margin-left: 10px;
        border-radius: 2px;
        background-position: center;
        background-image: url('http://www.clker.com/cliparts/n/U/H/1/H/u/search-icon-white-one-hi.png');
        background-size: 27px;
        background-repeat: no-repeat;
    }
`;
let CategoryContainer = styled.section`
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    margin: 0 3% 0 0;

    @media only screen and (max-width: 800px) {
        display: none;
    }
`;
let Category = styled.h1`
    font-size: 14px;
    font-weight: bold;
    line-height: 18px;
`;
let IconContainer = styled.div`
    display: ${props => props.mobile ? 'none' : 'flex'};
    align-items: center;
    height: 40px;

    @media only screen and (max-width: 800px) {
        display: ${props => props.mobile ? 'flex' : 'none'};
    }
    

`;