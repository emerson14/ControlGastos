import { Balance } from "./components/Balance";
import { ExpenseChart } from "./components/ExpenseChart";
import { Header } from "./components/Header";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { Readme } from "./components/Readme";
import { TransactionForm } from "./components/transactions/TransaccionForm";
import { TransactionList } from "./components/transactions/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-neutral-950 text-white h-screen flex justify-center items-start p-10">
        <div className="w-3/5 flex justify-center items-center mr-10">
          <div className="bg-neutral-800 p-10 rounded-md w-full">
            <Header />
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
                <IncomeExpenses />
                <Balance />
                <TransactionForm />
              </div>
              <div className="flex-1 flex flex-col">
                <ExpenseChart />
                <TransactionList />
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 bg-neutral-700 p-10 rounded-md">
          <Readme />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
