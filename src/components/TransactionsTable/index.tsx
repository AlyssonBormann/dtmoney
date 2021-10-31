import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$5.800</td>
            <td>Desenvolvimento</td>
            <td>29/10/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-  R$350,00</td>
            <td>Moradia</td>
            <td>05/11/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}