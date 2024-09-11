import { query } from "./graphql/getSubDomain";
import { GRAPHQL_ENDPOINT } from "./utils/constants";

/**
 * GraphQLクエリを送信する関数
 * @param query サブクエリ 
 * @returns 
 */
async function fetchGraphQL(query: any) {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          subDomain : "contract.toban.eth",           
          resolvedAddress: "0x06edd105b205eae5d6a2d319c2605f4c632073e4" 
        },
      }),
    });
  
    // レスポンスのステータスチェック
    if (!response.ok) {
      console.error('GraphQL request failed:', response.statusText);
      return;
    }
  
    const data = await response.json();
    return data;
  }
  
  // 実行
  fetchGraphQL(query)
    .then((data) => console.log(JSON.stringify(data, null, 2)))
    .catch((error) => console.error('Error fetching data:', error));