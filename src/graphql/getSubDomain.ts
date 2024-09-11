
// 特定のアドレスと紐づくサブドメインを取得するサブクエリ
export const query = `
    query getSubDomains($subDomain: String!, $resolvedAddress: String!) {
        domains(where: { 
            name: $subDomain
        }) {
            subdomains(where: { 
                resolvedAddress: $resolvedAddress
            }) {
                name
            }
        }
    }
`;