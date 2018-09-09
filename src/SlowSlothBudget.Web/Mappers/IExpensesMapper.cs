using SlowSlothBudget.Web.Models;
using SlowSlothBudget.Web.Models.Dtos;

namespace SlowSlothBudget.Web.Mappers
{
    public interface IExpensesMapper
    {
        Expense Map(ExpenseDto expenseDto, string userId);
        ExpenseDto Map(Expense expense);
    }
}