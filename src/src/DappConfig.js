export default {
  contractAddress: '0x6537d0ba68c18ec53174dbb39cabfd61bca9f3ce',
  contractABI: [
    {
      "contractName": "DappTokenSale",
      "abi": [
        {
          "constant": true,
          "inputs": [],
          "name": "tokensSold",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "tokenContract",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "tokenPrice",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "name": "_tokenContract",
              "type": "address"
            },
            {
              "name": "_tokenPrice",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "_buyer",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "Sell",
          "type": "event"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_numberOfTokens",
              "type": "uint256"
            }
          ],
          "name": "buyTokens",
          "outputs": [],
          "payable": true,
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "endSale",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x608060405234801561001057600080fd5b5060405160408061081a8339810180604052810190808051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806002819055505050610744806100d66000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633610724e14610072578063380d831b14610092578063518ab2a8146100a957806355a373d6146100d45780637ff9b5961461012b575b600080fd5b61009060048036038101908080359060200190929190505050610156565b005b34801561009e57600080fd5b506100a76103fe565b005b3480156100b557600080fd5b506100be6106b6565b6040518082815260200191505060405180910390f35b3480156100e057600080fd5b506100e96106bc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013757600080fd5b506101406106e2565b6040518082815260200191505060405180910390f35b610162816002546106e8565b3414151561016f57600080fd5b80600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561022d57600080fd5b505af1158015610241573d6000803e3d6000fd5b505050506040513d602081101561025757600080fd5b81019080805190602001909291905050501015151561027557600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561033a57600080fd5b505af115801561034e573d6000803e3d6000fd5b505050506040513d602081101561036457600080fd5b8101908080519060200190929190505050151561038057600080fd5b806003600082825401925050819055507f5e5e995ce3133561afceaa51a9a154d5db228cd7525d34df5185582c18d3df093382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561045957600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561057657600080fd5b505af115801561058a573d6000803e3d6000fd5b505050506040513d60208110156105a057600080fd5b81019080805190602001909291905050506040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561063657600080fd5b505af115801561064a573d6000803e3d6000fd5b505050506040513d602081101561066057600080fd5b8101908080519060200190929190505050151561067c57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b6000808214806107075750828283850292508281151561070457fe5b04145b151561071257600080fd5b929150505600a165627a7a723058208246721acbb62140e8d1cce0d6e6adbc43a96c31c8e06939817a062bdb49dce60029",
      "deployedBytecode": "0x60806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633610724e14610072578063380d831b14610092578063518ab2a8146100a957806355a373d6146100d45780637ff9b5961461012b575b600080fd5b61009060048036038101908080359060200190929190505050610156565b005b34801561009e57600080fd5b506100a76103fe565b005b3480156100b557600080fd5b506100be6106b6565b6040518082815260200191505060405180910390f35b3480156100e057600080fd5b506100e96106bc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013757600080fd5b506101406106e2565b6040518082815260200191505060405180910390f35b610162816002546106e8565b3414151561016f57600080fd5b80600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561022d57600080fd5b505af1158015610241573d6000803e3d6000fd5b505050506040513d602081101561025757600080fd5b81019080805190602001909291905050501015151561027557600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561033a57600080fd5b505af115801561034e573d6000803e3d6000fd5b505050506040513d602081101561036457600080fd5b8101908080519060200190929190505050151561038057600080fd5b806003600082825401925050819055507f5e5e995ce3133561afceaa51a9a154d5db228cd7525d34df5185582c18d3df093382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561045957600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561057657600080fd5b505af115801561058a573d6000803e3d6000fd5b505050506040513d60208110156105a057600080fd5b81019080805190602001909291905050506040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561063657600080fd5b505af115801561064a573d6000803e3d6000fd5b505050506040513d602081101561066057600080fd5b8101908080519060200190929190505050151561067c57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b6000808214806107075750828283850292508281151561070457fe5b04145b151561071257600080fd5b929150505600a165627a7a723058208246721acbb62140e8d1cce0d6e6adbc43a96c31c8e06939817a062bdb49dce60029",
      "sourceMap": "61:1070:1:-;;;258:175;8:9:-1;5:2;;;30:1;27;20:12;5:2;258:175:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;342:10;334:5;;:18;;;;;;;;;;;;;;;;;;378:14;362:13;;:30;;;;;;;;;;;;;;;;;;415:11;402:10;:24;;;;258:175;;61:1070;;;;;;",
      "deployedSourceMap": "61:1070:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;583:361;;;;;;;;;;;;;;;;;;;;;;;;;;950:179;;8:9:-1;5:2;;;30:1;27;20:12;5:2;950:179:1;;;;;;176:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;176:25:1;;;;;;;;;;;;;;;;;;;;;;;109:30;;8:9:-1;5:2;;;30:1;27;20:12;5:2;109:30:1;;;;;;;;;;;;;;;;;;;;;;;;;;;145:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;145:25:1;;;;;;;;;;;;;;;;;;;;;;;583:361;673:37;682:15;699:10;;673:8;:37::i;:::-;660:9;:50;652:59;;;;;;;;762:15;729:13;;;;;;;;;;;:23;;;753:4;729:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;729:29:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;729:29:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;729:29:1;;;;;;;;;;;;;;;;:48;;721:57;;;;;;;;796:13;;;;;;;;;;;:22;;;819:10;831:15;796:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;796:51:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;796:51:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;796:51:1;;;;;;;;;;;;;;;;788:60;;;;;;;;873:15;859:10;;:29;;;;;;;;;;;904:33;909:10;921:15;904:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;583:361;:::o;950:179::-;1008:5;;;;;;;;;;;994:19;;:10;:19;;;986:28;;;;;;;;1032:13;;;;;;;;;;;:22;;;1055:5;;;;;;;;;;;1062:13;;;;;;;;;;;:23;;;1086:4;1062:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1062:29:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1062:29:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1062:29:1;;;;;;;;;;;;;;;;1032:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1032:60:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1032:60:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1032:60:1;;;;;;;;;;;;;;;;1024:69;;;;;;;;1116:5;;;;;;;;;;;1103:19;;;176:25;;;;:::o;109:30::-;;;;;;;;;;;;;:::o;145:25::-;;;;:::o;455:122::-;512:6;544:1;539;:6;:30;;;;568:1;563;558;554;:5;550:9;;;549:15;;;;;;;;:20;539:30;530:40;;;;;;;;455:122;;;;:::o",
      "source": "pragma solidity >=0.4.21 <0.6.0;\n\nimport './DappToken.sol';\n\ncontract DappTokenSale {\n    address admin;\n    DappToken public tokenContract;\n    uint256 public tokenPrice;\n    uint256 public tokensSold;\n\n    event Sell(address _buyer, uint256 _amount);\n\n    constructor(DappToken _tokenContract, uint256 _tokenPrice) public {\n        admin = msg.sender;\n        tokenContract = _tokenContract;\n        tokenPrice = _tokenPrice;\n    }\n\n    // Multiply\n    function multiply(uint x, uint y) internal pure returns (uint z) {\n        require (y == 0 || (z = x * y) / y == x);\n    }\n\n    function buyTokens(uint256 _numberOfTokens) public payable {\n        require(msg.value == multiply(_numberOfTokens, tokenPrice));\n        require(tokenContract.balanceOf(this) >= _numberOfTokens);\n        require(tokenContract.transfer(msg.sender, _numberOfTokens));\n\n        tokensSold += _numberOfTokens;\n\n        emit Sell(msg.sender, _numberOfTokens);\n    }\n\n    function endSale() public {\n        require(msg.sender == admin);\n        require(tokenContract.transfer(admin, tokenContract.balanceOf(this)));\n        selfdestruct(admin);\n    }\n}",
      "sourcePath": "/home/rajkumara/projects/block-chain/ethereum/token_sale/contracts/DappTokenSale.sol",
      "ast": {
        "absolutePath": "/home/rajkumara/projects/block-chain/ethereum/token_sale/contracts/DappTokenSale.sol",
        "exportedSymbols": {
          "DappTokenSale": [
            325
          ]
        },
        "id": 326,
        "nodeType": "SourceUnit",
        "nodes": [
          {
            "id": 191,
            "literals": [
              "solidity",
              ">=",
              "0.4",
              ".21",
              "<",
              "0.6",
              ".0"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:32:1"
          },
          {
            "absolutePath": "/home/rajkumara/projects/block-chain/ethereum/token_sale/contracts/DappToken.sol",
            "file": "./DappToken.sol",
            "id": 192,
            "nodeType": "ImportDirective",
            "scope": 326,
            "sourceUnit": 190,
            "src": "34:25:1",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "baseContracts": [],
            "contractDependencies": [],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "id": 325,
            "linearizedBaseContracts": [
              325
            ],
            "name": "DappTokenSale",
            "nodeType": "ContractDefinition",
            "nodes": [
              {
                "constant": false,
                "id": 194,
                "name": "admin",
                "nodeType": "VariableDeclaration",
                "scope": 325,
                "src": "90:13:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 193,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "90:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 196,
                "name": "tokenContract",
                "nodeType": "VariableDeclaration",
                "scope": 325,
                "src": "109:30:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_DappToken_$189",
                  "typeString": "contract DappToken"
                },
                "typeName": {
                  "contractScope": null,
                  "id": 195,
                  "name": "DappToken",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 189,
                  "src": "109:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_DappToken_$189",
                    "typeString": "contract DappToken"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 198,
                "name": "tokenPrice",
                "nodeType": "VariableDeclaration",
                "scope": 325,
                "src": "145:25:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 197,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "145:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 200,
                "name": "tokensSold",
                "nodeType": "VariableDeclaration",
                "scope": 325,
                "src": "176:25:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 199,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "176:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "anonymous": false,
                "documentation": null,
                "id": 206,
                "name": "Sell",
                "nodeType": "EventDefinition",
                "parameters": {
                  "id": 205,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 202,
                      "indexed": false,
                      "name": "_buyer",
                      "nodeType": "VariableDeclaration",
                      "scope": 206,
                      "src": "219:14:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 201,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "219:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 204,
                      "indexed": false,
                      "name": "_amount",
                      "nodeType": "VariableDeclaration",
                      "scope": 206,
                      "src": "235:15:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 203,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "235:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "218:33:1"
                },
                "src": "208:44:1"
              },
              {
                "body": {
                  "id": 226,
                  "nodeType": "Block",
                  "src": "324:109:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 216,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 213,
                          "name": "admin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 194,
                          "src": "334:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 214,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 340,
                            "src": "342:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 215,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "342:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "334:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 217,
                      "nodeType": "ExpressionStatement",
                      "src": "334:18:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 220,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 218,
                          "name": "tokenContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 196,
                          "src": "362:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_DappToken_$189",
                            "typeString": "contract DappToken"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 219,
                          "name": "_tokenContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 208,
                          "src": "378:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_DappToken_$189",
                            "typeString": "contract DappToken"
                          }
                        },
                        "src": "362:30:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DappToken_$189",
                          "typeString": "contract DappToken"
                        }
                      },
                      "id": 221,
                      "nodeType": "ExpressionStatement",
                      "src": "362:30:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 224,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 222,
                          "name": "tokenPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 198,
                          "src": "402:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 223,
                          "name": "_tokenPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 210,
                          "src": "415:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "402:24:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 225,
                      "nodeType": "ExpressionStatement",
                      "src": "402:24:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 227,
                "implemented": true,
                "isConstructor": true,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 211,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 208,
                      "name": "_tokenContract",
                      "nodeType": "VariableDeclaration",
                      "scope": 227,
                      "src": "270:24:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DappToken_$189",
                        "typeString": "contract DappToken"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 207,
                        "name": "DappToken",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 189,
                        "src": "270:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DappToken_$189",
                          "typeString": "contract DappToken"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 210,
                      "name": "_tokenPrice",
                      "nodeType": "VariableDeclaration",
                      "scope": 227,
                      "src": "296:19:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 209,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "296:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "269:47:1"
                },
                "payable": false,
                "returnParameters": {
                  "id": 212,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "324:0:1"
                },
                "scope": 325,
                "src": "258:175:1",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 253,
                  "nodeType": "Block",
                  "src": "520:57:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 250,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 239,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 237,
                                "name": "y",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 231,
                                "src": "539:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 238,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "544:1:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "539:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "||",
                            "rightExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 249,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 247,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "components": [
                                    {
                                      "argumentTypes": null,
                                      "id": 244,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                        "argumentTypes": null,
                                        "id": 240,
                                        "name": "z",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 234,
                                        "src": "550:1:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "Assignment",
                                      "operator": "=",
                                      "rightHandSide": {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 243,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "id": 241,
                                          "name": "x",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 229,
                                          "src": "554:1:1",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "*",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "id": 242,
                                          "name": "y",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 231,
                                          "src": "558:1:1",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "554:5:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "550:9:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "id": 245,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "549:11:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "/",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 246,
                                  "name": "y",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 231,
                                  "src": "563:1:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "549:15:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 248,
                                "name": "x",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 229,
                                "src": "568:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "549:20:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "539:30:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 236,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            343,
                            344
                          ],
                          "referencedDeclaration": 343,
                          "src": "530:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                            "typeString": "function (bool) pure"
                          }
                        },
                        "id": 251,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "530:40:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 252,
                      "nodeType": "ExpressionStatement",
                      "src": "530:40:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 254,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": true,
                "modifiers": [],
                "name": "multiply",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 232,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 229,
                      "name": "x",
                      "nodeType": "VariableDeclaration",
                      "scope": 254,
                      "src": "473:6:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 228,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "473:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 231,
                      "name": "y",
                      "nodeType": "VariableDeclaration",
                      "scope": 254,
                      "src": "481:6:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 230,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "481:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "472:16:1"
                },
                "payable": false,
                "returnParameters": {
                  "id": 235,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 234,
                      "name": "z",
                      "nodeType": "VariableDeclaration",
                      "scope": 254,
                      "src": "512:6:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 233,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "512:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "511:8:1"
                },
                "scope": 325,
                "src": "455:122:1",
                "stateMutability": "pure",
                "superFunction": null,
                "visibility": "internal"
              },
              {
                "body": {
                  "id": 297,
                  "nodeType": "Block",
                  "src": "642:302:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 266,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 260,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 340,
                                "src": "660:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 261,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "value",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "660:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 263,
                                  "name": "_numberOfTokens",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 256,
                                  "src": "682:15:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 264,
                                  "name": "tokenPrice",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 198,
                                  "src": "699:10:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 262,
                                "name": "multiply",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 254,
                                "src": "673:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 265,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "673:37:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "660:50:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 259,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            343,
                            344
                          ],
                          "referencedDeclaration": 343,
                          "src": "652:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                            "typeString": "function (bool) pure"
                          }
                        },
                        "id": 267,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "652:59:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 268,
                      "nodeType": "ExpressionStatement",
                      "src": "652:59:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 275,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 272,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 355,
                                  "src": "753:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_DappTokenSale_$325",
                                    "typeString": "contract DappTokenSale"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_DappTokenSale_$325",
                                    "typeString": "contract DappTokenSale"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 270,
                                  "name": "tokenContract",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 196,
                                  "src": "729:13:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_DappToken_$189",
                                    "typeString": "contract DappToken"
                                  }
                                },
                                "id": 271,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "balanceOf",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 32,
                                "src": "729:23:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                  "typeString": "function (address) view external returns (uint256)"
                                }
                              },
                              "id": 273,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "729:29:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 274,
                              "name": "_numberOfTokens",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 256,
                              "src": "762:15:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "729:48:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 269,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            343,
                            344
                          ],
                          "referencedDeclaration": 343,
                          "src": "721:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                            "typeString": "function (bool) pure"
                          }
                        },
                        "id": 276,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "721:57:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 277,
                      "nodeType": "ExpressionStatement",
                      "src": "721:57:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 281,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 340,
                                  "src": "819:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 282,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "819:10:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 283,
                                "name": "_numberOfTokens",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 256,
                                "src": "831:15:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 279,
                                "name": "tokenContract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 196,
                                "src": "796:13:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_DappToken_$189",
                                  "typeString": "contract DappToken"
                                }
                              },
                              "id": 280,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "transfer",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 100,
                              "src": "796:22:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) external returns (bool)"
                              }
                            },
                            "id": 284,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "796:51:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 278,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            343,
                            344
                          ],
                          "referencedDeclaration": 343,
                          "src": "788:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                            "typeString": "function (bool) pure"
                          }
                        },
                        "id": 285,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "788:60:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 286,
                      "nodeType": "ExpressionStatement",
                      "src": "788:60:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 289,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 287,
                          "name": "tokensSold",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 200,
                          "src": "859:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 288,
                          "name": "_numberOfTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 256,
                          "src": "873:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "859:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 290,
                      "nodeType": "ExpressionStatement",
                      "src": "859:29:1"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 292,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 340,
                              "src": "909:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 293,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "909:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 294,
                            "name": "_numberOfTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 256,
                            "src": "921:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 291,
                          "name": "Sell",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 206,
                          "src": "904:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,uint256)"
                          }
                        },
                        "id": 295,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "904:33:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 296,
                      "nodeType": "EmitStatement",
                      "src": "899:38:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 298,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "buyTokens",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 257,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 256,
                      "name": "_numberOfTokens",
                      "nodeType": "VariableDeclaration",
                      "scope": 298,
                      "src": "602:23:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 255,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "602:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "601:25:1"
                },
                "payable": true,
                "returnParameters": {
                  "id": 258,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "642:0:1"
                },
                "scope": 325,
                "src": "583:361:1",
                "stateMutability": "payable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 323,
                  "nodeType": "Block",
                  "src": "976:153:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 305,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 302,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 340,
                                "src": "994:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 303,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "994:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 304,
                              "name": "admin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 194,
                              "src": "1008:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "994:19:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 301,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            343,
                            344
                          ],
                          "referencedDeclaration": 343,
                          "src": "986:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                            "typeString": "function (bool) pure"
                          }
                        },
                        "id": 306,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "986:28:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 307,
                      "nodeType": "ExpressionStatement",
                      "src": "986:28:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 311,
                                "name": "admin",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 194,
                                "src": "1055:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 314,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 355,
                                    "src": "1086:4:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_DappTokenSale_$325",
                                      "typeString": "contract DappTokenSale"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_DappTokenSale_$325",
                                      "typeString": "contract DappTokenSale"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 312,
                                    "name": "tokenContract",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 196,
                                    "src": "1062:13:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_DappToken_$189",
                                      "typeString": "contract DappToken"
                                    }
                                  },
                                  "id": 313,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "balanceOf",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 32,
                                  "src": "1062:23:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                    "typeString": "function (address) view external returns (uint256)"
                                  }
                                },
                                "id": 315,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1062:29:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 309,
                                "name": "tokenContract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 196,
                                "src": "1032:13:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_DappToken_$189",
                                  "typeString": "contract DappToken"
                                }
                              },
                              "id": 310,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "transfer",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 100,
                              "src": "1032:22:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) external returns (bool)"
                              }
                            },
                            "id": 316,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1032:60:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 308,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            343,
                            344
                          ],
                          "referencedDeclaration": 343,
                          "src": "1024:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                            "typeString": "function (bool) pure"
                          }
                        },
                        "id": 317,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1024:69:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 318,
                      "nodeType": "ExpressionStatement",
                      "src": "1024:69:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 320,
                            "name": "admin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 194,
                            "src": "1116:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 319,
                          "name": "selfdestruct",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 348,
                          "src": "1103:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                            "typeString": "function (address)"
                          }
                        },
                        "id": 321,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1103:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 322,
                      "nodeType": "ExpressionStatement",
                      "src": "1103:19:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 324,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "endSale",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 299,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "966:2:1"
                },
                "payable": false,
                "returnParameters": {
                  "id": 300,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "976:0:1"
                },
                "scope": 325,
                "src": "950:179:1",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              }
            ],
            "scope": 326,
            "src": "61:1070:1"
          }
        ],
        "src": "0:1131:1"
      },
      "legacyAST": {
        "absolutePath": "/home/rajkumara/projects/block-chain/ethereum/token_sale/contracts/DappTokenSale.sol",
        "exportedSymbols": {
          "DappTokenSale": [
            325
          ]
        },
        "id": 326,
        "nodeType": "SourceUnit",
        "nodes": [
          {
            "id": 191,
            "literals": [
              "solidity",
              ">=",
              "0.4",
              ".21",
              "<",
              "0.6",
              ".0"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:32:1"
          },
          {
            "absolutePath": "/home/rajkumara/projects/block-chain/ethereum/token_sale/contracts/DappToken.sol",
            "file": "./DappToken.sol",
            "id": 192,
            "nodeType": "ImportDirective",
            "scope": 326,
            "sourceUnit": 190,
            "src": "34:25:1",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "baseContracts": [],
            "contractDependencies": [],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "id": 325,
            "linearizedBaseContracts": [
              325
            ],
            "name": "DappTokenSale",
            "nodeType": "ContractDefinition",
            "nodes": [
              {
                "constant": false,
                "id": 194,
                "name": "admin",
                "nodeType": "VariableDeclaration",
                "scope": 325,
                "src": "90:13:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 193,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "90:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 196,
                "name": "tokenContract",
                "nodeType": "VariableDeclaration",
                "scope": 325,
                "src": "109:30:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_DappToken_$189",
                  "typeString": "contract DappToken"
                },
                "typeName": {
                  "contractScope": null,
                  "id": 195,
                  "name": "DappToken",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 189,
                  "src": "109:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_DappToken_$189",
                    "typeString": "contract DappToken"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 198,
                "name": "tokenPrice",
                "nodeType": "VariableDeclaration",
                "scope": 325,
                "src": "145:25:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 197,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "145:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 200,
                "name": "tokensSold",
                "nodeType": "VariableDeclaration",
                "scope": 325,
                "src": "176:25:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 199,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "176:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "anonymous": false,
                "documentation": null,
                "id": 206,
                "name": "Sell",
                "nodeType": "EventDefinition",
                "parameters": {
                  "id": 205,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 202,
                      "indexed": false,
                      "name": "_buyer",
                      "nodeType": "VariableDeclaration",
                      "scope": 206,
                      "src": "219:14:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 201,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "219:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 204,
                      "indexed": false,
                      "name": "_amount",
                      "nodeType": "VariableDeclaration",
                      "scope": 206,
                      "src": "235:15:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 203,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "235:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "218:33:1"
                },
                "src": "208:44:1"
              },
              {
                "body": {
                  "id": 226,
                  "nodeType": "Block",
                  "src": "324:109:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 216,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 213,
                          "name": "admin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 194,
                          "src": "334:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 214,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 340,
                            "src": "342:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 215,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "342:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "334:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 217,
                      "nodeType": "ExpressionStatement",
                      "src": "334:18:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 220,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 218,
                          "name": "tokenContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 196,
                          "src": "362:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_DappToken_$189",
                            "typeString": "contract DappToken"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 219,
                          "name": "_tokenContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 208,
                          "src": "378:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_DappToken_$189",
                            "typeString": "contract DappToken"
                          }
                        },
                        "src": "362:30:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DappToken_$189",
                          "typeString": "contract DappToken"
                        }
                      },
                      "id": 221,
                      "nodeType": "ExpressionStatement",
                      "src": "362:30:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 224,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 222,
                          "name": "tokenPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 198,
                          "src": "402:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 223,
                          "name": "_tokenPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 210,
                          "src": "415:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "402:24:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 225,
                      "nodeType": "ExpressionStatement",
                      "src": "402:24:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 227,
                "implemented": true,
                "isConstructor": true,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 211,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 208,
                      "name": "_tokenContract",
                      "nodeType": "VariableDeclaration",
                      "scope": 227,
                      "src": "270:24:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DappToken_$189",
                        "typeString": "contract DappToken"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 207,
                        "name": "DappToken",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 189,
                        "src": "270:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DappToken_$189",
                          "typeString": "contract DappToken"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 210,
                      "name": "_tokenPrice",
                      "nodeType": "VariableDeclaration",
                      "scope": 227,
                      "src": "296:19:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 209,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "296:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "269:47:1"
                },
                "payable": false,
                "returnParameters": {
                  "id": 212,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "324:0:1"
                },
                "scope": 325,
                "src": "258:175:1",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 253,
                  "nodeType": "Block",
                  "src": "520:57:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 250,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 239,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 237,
                                "name": "y",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 231,
                                "src": "539:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 238,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "544:1:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "539:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "||",
                            "rightExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 249,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 247,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "components": [
                                    {
                                      "argumentTypes": null,
                                      "id": 244,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                        "argumentTypes": null,
                                        "id": 240,
                                        "name": "z",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 234,
                                        "src": "550:1:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "Assignment",
                                      "operator": "=",
                                      "rightHandSide": {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 243,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "id": 241,
                                          "name": "x",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 229,
                                          "src": "554:1:1",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "*",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "id": 242,
                                          "name": "y",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 231,
                                          "src": "558:1:1",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "554:5:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "550:9:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "id": 245,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "549:11:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "/",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 246,
                                  "name": "y",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 231,
                                  "src": "563:1:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "549:15:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 248,
                                "name": "x",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 229,
                                "src": "568:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "549:20:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "539:30:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 236,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            343,
                            344
                          ],
                          "referencedDeclaration": 343,
                          "src": "530:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                            "typeString": "function (bool) pure"
                          }
                        },
                        "id": 251,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "530:40:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 252,
                      "nodeType": "ExpressionStatement",
                      "src": "530:40:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 254,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": true,
                "modifiers": [],
                "name": "multiply",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 232,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 229,
                      "name": "x",
                      "nodeType": "VariableDeclaration",
                      "scope": 254,
                      "src": "473:6:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 228,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "473:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 231,
                      "name": "y",
                      "nodeType": "VariableDeclaration",
                      "scope": 254,
                      "src": "481:6:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 230,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "481:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "472:16:1"
                },
                "payable": false,
                "returnParameters": {
                  "id": 235,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 234,
                      "name": "z",
                      "nodeType": "VariableDeclaration",
                      "scope": 254,
                      "src": "512:6:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 233,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "512:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "511:8:1"
                },
                "scope": 325,
                "src": "455:122:1",
                "stateMutability": "pure",
                "superFunction": null,
                "visibility": "internal"
              },
              {
                "body": {
                  "id": 297,
                  "nodeType": "Block",
                  "src": "642:302:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 266,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 260,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 340,
                                "src": "660:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 261,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "value",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "660:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 263,
                                  "name": "_numberOfTokens",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 256,
                                  "src": "682:15:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 264,
                                  "name": "tokenPrice",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 198,
                                  "src": "699:10:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 262,
                                "name": "multiply",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 254,
                                "src": "673:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 265,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "673:37:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "660:50:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 259,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            343,
                            344
                          ],
                          "referencedDeclaration": 343,
                          "src": "652:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                            "typeString": "function (bool) pure"
                          }
                        },
                        "id": 267,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "652:59:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 268,
                      "nodeType": "ExpressionStatement",
                      "src": "652:59:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 275,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 272,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 355,
                                  "src": "753:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_DappTokenSale_$325",
                                    "typeString": "contract DappTokenSale"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_DappTokenSale_$325",
                                    "typeString": "contract DappTokenSale"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 270,
                                  "name": "tokenContract",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 196,
                                  "src": "729:13:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_DappToken_$189",
                                    "typeString": "contract DappToken"
                                  }
                                },
                                "id": 271,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "balanceOf",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 32,
                                "src": "729:23:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                  "typeString": "function (address) view external returns (uint256)"
                                }
                              },
                              "id": 273,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "729:29:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 274,
                              "name": "_numberOfTokens",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 256,
                              "src": "762:15:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "729:48:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 269,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            343,
                            344
                          ],
                          "referencedDeclaration": 343,
                          "src": "721:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                            "typeString": "function (bool) pure"
                          }
                        },
                        "id": 276,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "721:57:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 277,
                      "nodeType": "ExpressionStatement",
                      "src": "721:57:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 281,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 340,
                                  "src": "819:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 282,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "819:10:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 283,
                                "name": "_numberOfTokens",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 256,
                                "src": "831:15:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 279,
                                "name": "tokenContract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 196,
                                "src": "796:13:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_DappToken_$189",
                                  "typeString": "contract DappToken"
                                }
                              },
                              "id": 280,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "transfer",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 100,
                              "src": "796:22:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) external returns (bool)"
                              }
                            },
                            "id": 284,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "796:51:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 278,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            343,
                            344
                          ],
                          "referencedDeclaration": 343,
                          "src": "788:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                            "typeString": "function (bool) pure"
                          }
                        },
                        "id": 285,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "788:60:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 286,
                      "nodeType": "ExpressionStatement",
                      "src": "788:60:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 289,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 287,
                          "name": "tokensSold",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 200,
                          "src": "859:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 288,
                          "name": "_numberOfTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 256,
                          "src": "873:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "859:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 290,
                      "nodeType": "ExpressionStatement",
                      "src": "859:29:1"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 292,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 340,
                              "src": "909:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 293,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "909:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 294,
                            "name": "_numberOfTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 256,
                            "src": "921:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 291,
                          "name": "Sell",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 206,
                          "src": "904:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,uint256)"
                          }
                        },
                        "id": 295,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "904:33:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 296,
                      "nodeType": "EmitStatement",
                      "src": "899:38:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 298,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "buyTokens",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 257,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 256,
                      "name": "_numberOfTokens",
                      "nodeType": "VariableDeclaration",
                      "scope": 298,
                      "src": "602:23:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 255,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "602:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "601:25:1"
                },
                "payable": true,
                "returnParameters": {
                  "id": 258,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "642:0:1"
                },
                "scope": 325,
                "src": "583:361:1",
                "stateMutability": "payable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 323,
                  "nodeType": "Block",
                  "src": "976:153:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 305,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 302,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 340,
                                "src": "994:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 303,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "994:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 304,
                              "name": "admin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 194,
                              "src": "1008:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "994:19:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 301,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            343,
                            344
                          ],
                          "referencedDeclaration": 343,
                          "src": "986:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                            "typeString": "function (bool) pure"
                          }
                        },
                        "id": 306,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "986:28:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 307,
                      "nodeType": "ExpressionStatement",
                      "src": "986:28:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 311,
                                "name": "admin",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 194,
                                "src": "1055:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 314,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 355,
                                    "src": "1086:4:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_DappTokenSale_$325",
                                      "typeString": "contract DappTokenSale"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_DappTokenSale_$325",
                                      "typeString": "contract DappTokenSale"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 312,
                                    "name": "tokenContract",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 196,
                                    "src": "1062:13:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_DappToken_$189",
                                      "typeString": "contract DappToken"
                                    }
                                  },
                                  "id": 313,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "balanceOf",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 32,
                                  "src": "1062:23:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                    "typeString": "function (address) view external returns (uint256)"
                                  }
                                },
                                "id": 315,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1062:29:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 309,
                                "name": "tokenContract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 196,
                                "src": "1032:13:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_DappToken_$189",
                                  "typeString": "contract DappToken"
                                }
                              },
                              "id": 310,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "transfer",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 100,
                              "src": "1032:22:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) external returns (bool)"
                              }
                            },
                            "id": 316,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1032:60:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 308,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            343,
                            344
                          ],
                          "referencedDeclaration": 343,
                          "src": "1024:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                            "typeString": "function (bool) pure"
                          }
                        },
                        "id": 317,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1024:69:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 318,
                      "nodeType": "ExpressionStatement",
                      "src": "1024:69:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 320,
                            "name": "admin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 194,
                            "src": "1116:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 319,
                          "name": "selfdestruct",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 348,
                          "src": "1103:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                            "typeString": "function (address)"
                          }
                        },
                        "id": 321,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1103:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 322,
                      "nodeType": "ExpressionStatement",
                      "src": "1103:19:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 324,
                "implemented": true,
                "isConstructor": false,
                "isDeclaredConst": false,
                "modifiers": [],
                "name": "endSale",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 299,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "966:2:1"
                },
                "payable": false,
                "returnParameters": {
                  "id": 300,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "976:0:1"
                },
                "scope": 325,
                "src": "950:179:1",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              }
            ],
            "scope": 326,
            "src": "61:1070:1"
          }
        ],
        "src": "0:1131:1"
      },
      "compiler": {
        "name": "solc",
        "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
      },
      "networks": {
        "1552287127533": {
          "events": {},
          "links": {},
          "address": "0x6537d0ba68c18ec53174dbb39cabfd61bca9f3ce",
          "transactionHash": "0xfc6b828fc9e3cbcb242b89c6c93928c889f616b3927368e0c7c732cf30479f8b"
        }
      },
      "schemaVersion": "2.0.2",
      "updatedAt": "2019-03-11T09:02:39.994Z"
    }
  ]
}