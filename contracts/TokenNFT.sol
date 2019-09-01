pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721MetadataMintable.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Mintable.sol";

contract TokenNFT is ERC721Full, ERC721MetadataMintable, ERC721Mintable {
    constructor() ERC721Full("Midori", "MDR") public {}
}
