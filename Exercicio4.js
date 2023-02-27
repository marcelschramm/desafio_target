const faturamentoMensal = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
  };
  
  let totalMensal = 0;
  
  // Passo 1: Somar o valor de faturamento de todos os estados
  for (let estado in faturamentoMensal) {
    totalMensal += faturamentoMensal[estado];
  }
  
  // Passo 2: Calcular o percentual de representação de cada estado
  for (let estado in faturamentoMensal) {
    const percentual = (faturamentoMensal[estado] / totalMensal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }