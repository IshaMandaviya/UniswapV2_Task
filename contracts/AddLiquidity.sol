// SPDX-License-Identifier: UNLICENSED
pragma solidity <=0.8.0;
import '@uniswap/lib/contracts/libraries/TransferHelper.sol';
import '@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol';
import 'hardhat/console.sol';
contract AddLiquidity {
    address public tokenA;
    address public tokenB;
    address public router;
    constructor(address _router,address _tokenA,address _tokenB)  {
        router = _router;
        tokenA = _tokenA;
        tokenB = _tokenB;
    }
    function _addLiquidity(
       
        uint amountADesired,
        uint amountBDesired) public 
    {
               
        TransferHelper.safeTransferFrom(tokenA,msg.sender, address(this), amountADesired);
        TransferHelper.safeTransferFrom(tokenB,msg.sender, address(this), amountBDesired);
        TransferHelper.safeApprove(tokenA, address(router), amountADesired);
        TransferHelper.safeApprove(tokenB, address(router), amountBDesired);
        IUniswapV2Router02(router).addLiquidity(tokenA,tokenB,amountADesired,amountBDesired,0, 0,msg.sender, block.timestamp);
        
    }
}