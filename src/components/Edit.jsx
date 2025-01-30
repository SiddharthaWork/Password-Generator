import CustomButton from "@/components/CustomButton";
import Heading from "@/components/Heading";
import DataTable from "@/components/table";
import { Action } from "@/components/TableAction";
import { Plus } from "lucide-react";
import { useCallback, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import Expenses from "../../assets/images/expense.svg";
import CustomForm from "./components/ExpensesForm";
import Chart from "./components/Graph";
import { useMemo } from "react";
import { useGetAllExpensesQuery } from "@/redux/api/expenseApi";
import moment from "moment";
const ExpensesManagement = () => {
  const { data: expenseData } = useGetAllExpensesQuery();
  const [isEditing, setEditing] = useState({
    state: false,
    details: null,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const option = [
    { name: "Option A", icon: <FaCircle />, price: "$30" },
    { name: "Option A", icon: <FaCircle />, price: "$30" },
    { name: "Option A", icon: <FaCircle />, price: "$30" },
    { name: "Option A", icon: <FaCircle />, price: "$30" },
    { name: "Option A", icon: <FaCircle />, price: "$30" },
    { name: "Option A", icon: <FaCircle />, price: "$30" },
  ];
  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "#" },
      { accessorKey: "date", header: "DATE" },
      { accessorKey: "expense_id", header: "EXPENSE ID" },
      { accessorKey: "category", header: "CATEGORY" },
      { accessorKey: "linked_purchase_id", header: "LINKED PURCHASE ID" },
      { accessorKey: "description", header: "DESCRIPTION" },
      { accessorKey: "amount", header: "AMOUNT (RS)" },
      { accessorKey: "payment_mode", header: "PAYMENT MODE" },
      { accessorKey: "notes", header: "NOTES" },
      { accessorKey: "action", header: "ACTION" },
    ],
    []
  );
  const onEditClick = useCallback((item) => {
    setEditing({
      state: true,
      details: item,
    });
    handleOpen();
  }, []);
  const tableData = useMemo(
    () =>
      expenseData
        ? expenseData?.data?.map((item) => ({
            date: moment(item.date).format("YYYY-MM-DD"),
            // expense_id: "EX-10234",
            category: "Inventory",
            // linked_purchase_id: "PR-10234",
            description: (
              <p className="text-justify line-clamp-2">{item.description}</p>
            ),
            amount: item.amount,
            payment_mode: item.paymentMode,
            notes: <p className="text-justify line-clamp-2">{item.note}</p>,
            action: (
              <Action remove={false} onEditClick={() => onEditClick(item)} />
            ),
          }))
        : [],
    [expenseData]
  );
  const handleAddClick = useCallback(() => {
    setEditing({
      state: false,
      details: null,
    });
    handleOpen();
  }, []);
  console.log("ediiiiiiiiii", isEditing);
  return (
    <div className="w-full h-full px-4 space-y-4">
      <Heading text="Expenses Management" />
      <DataTable
        columns={columns}
        data={tableData}
        csv={true}
        print={true}
        download={true}
        filter={true}
        content={
          <div className="w-fullhandleOpen h-full flex flex-col lg:flex-row justify-center bg-[#FBFCFF] gap-4 pb-2">
            <div className="w-full h-full lg:w-1/2">
              <Chart />
            </div>
            <div className="w-full lg:w-1/2 xl:h-[29rem] h-full flex flex-col  border border-gray-200 bg-white rounded-lg shadow-md px-6 py-4">
              <h1 className="mb-4 text-lg font-semibold text-center lg:text-left xs:pt-6">
                Category wise Expense Tracking
              </h1>
              <div className="flex flex-col items-center justify-center my-auto md:flex-row md:gap-4">
                <div className="w-full h-full mb-4 md:w-1/2 md:mb-0">
                  <img
                    src={Expenses}
                    alt="Expense"
                    className="md:w-full md:h-full w-[14rem] object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full space-y-4 md:w-1/2">
                  {option.map((item, index) => (
                    <div key={index} className="flex flex-row w-full h-fit">
                      <div className="flex items-center flex-1 gap-2 h-fit">
                        <span>{item.icon}</span>
                        <h1 className="text-sm font-bold xl:text-lg lg:text-base">
                          {item.name}
                        </h1>
                      </div>
                      <div className="flex items-center justify-end gap-2 h-fit">
                        <h1 className="text-sm font-bold xl:text-lg lg:text-base">
                          {item.price}
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        }
      >
        <button className="flex px-2 py-[0.5rem] items-center justify-center gap-6 bg-white text-[#585858] text-sm rounded-md border border-[#585858]/50 shadow-md">
          Today
          <span className="flex ">
            <FaAngleDown />
          </span>
        </button>
        <CustomButton
          text="Add Item"
          onClick={handleAddClick}
          startIcon={<Plus size={16} />}
          size="medium"
        >
          New Expenses
        </CustomButton>
      </DataTable>
      <CustomForm
        isEditing={isEditing.state}
        details={isEditing.details}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};
export default ExpensesManagement;