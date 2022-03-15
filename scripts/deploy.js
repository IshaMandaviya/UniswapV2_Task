async function main() {
    const [deployer] = await ethers.getSigners();
    const Token0 = await ethers.getContractFactory("Token0");
    const token0Contract = await Token0.deploy();
    console.log("Token0 address",token0Contract.address);

    const Token1 = await ethers.getContractFactory("Token1");
    const token1Contract = await Token1.deploy();
    console.log("Token1 address",token1Contract.address);

    const AddLiquidity = await ethers.getContractFactory("AddLiquidity");
    const addLiquidity = await AddLiquidity.deploy("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",token0Contract.address,token1Contract.address);
    console.log("AddLiquidity contract address:", addLiquidity.address);

    
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });