const calculateBalance = (incomes, expenses) => {
    const incomeItems = incomes.split(",");
    const expenseItems = expenses.split(",");
  
    const totalIncome = calculateTotal(incomeItems);
  
    const totalExpense = calculateTotal(expenseItems);
  
    const balance = totalIncome - totalExpense;
  
    