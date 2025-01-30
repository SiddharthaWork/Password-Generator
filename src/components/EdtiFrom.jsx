import {
    Box,
    Button,
    FormLabel,
    Grid2,
    MenuItem,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import { Form, FormikProvider, useFormik } from "formik";
  import { User2 } from "lucide-react";
  import DynamicDrawer from "../../../components/DynamicDrawer";
  import {
    useCreateExpenseMutation,
    useGetAllExpenseCategoryQuery,
    useGetAllPaymentModeQuery,
  } from "@/redux/api/expenseApi";
  import { toast } from "react-toastify";
  import CustomButton from "@/components/CustomButton";
  import moment from "moment";
  import { get } from "lodash";
  const CustomForm = ({ open, onClose, isEditing, details }) => {
    const { data: paymentModes } = useGetAllPaymentModeQuery();
    const { data: expenseCategory } = useGetAllExpenseCategoryQuery();
    const [createExpense, { isLoading }] = useCreateExpenseMutation();
    console.log("deeeeeeeeeeeetails", details);
    const formik = useFormik({
      initialValues: {
        date: isEditing ? moment(get(details, "date")).format("YYYY-MM-DD") : "",
        expenseCategory: isEditing ? get(details, "expenseCategory") : "",
        description: isEditing ? get(details, "description") : "",
        amount: isEditing ? get(details, "amount") : "",
        paymentMode: isEditing ? get(details, "paymentMode") : "",
        note: isEditing ? get(details, "note") : "",
      },
      enableReinitialize: true,
      onSubmit: async (values) => {
        console.log("submitting");
        const result = { ...values, date: moment(values.data).toISOString() };
        try {
          const res = await createExpense(result).unwrap();
          if (res?.success) {
            toast.success(res?.message);
            resetForm();
          }
        } catch (err) {
          console.log(err);
          toast.error(err?.data?.message);
        }
      },
    });
    const { getFieldProps, handleSubmit, values, errors, resetForm } = formik;
    const categoryDetails = [
      {
        label: "Date",
        name: "date",
        placeholder: "Enter Category Name",
        type: "date",
      },
      {
        label: "Category",
        name: "expenseCategory",
        placeholder: "Select Category",
        type: "select",
        options: expenseCategory ? expenseCategory?.data : [],
      },
      {
        label: "Description",
        name: "description",
        placeholder: "Enter Description",
        multiline: true,
        rows: 4,
      },
      {
        label: "Amount",
        name: "amount",
        placeholder: "Enter Amount",
        type: "number",
      },
      {
        label: "Payment Mode",
        name: "paymentMode",
        placeholder: "Select Payment Mode",
        type: "select",
        options: paymentModes ? paymentModes?.data : [],
      },
      {
        label: "Note/Reason of Expense",
        name: "note",
        placeholder: "Enter Description",
        multiline: true,
        rows: 4,
      },
    ];
    console.log("values", values);
    console.log(errors);
    return (
      <DynamicDrawer
        open={open}
        headerText="Add New Expense"
        onClose={onClose}
        size="xs"
      >
        <Stack px={2} py={1} className="max-w-sm">
          <FormikProvider value={formik}>
            <FormTitle Icon={User2} headerText="Expense Details" />
            <Form onSubmit={handleSubmit}>
              <Grid2 container spacing={1}>
                {categoryDetails?.map((item) => (
                  <Grid2 item key={item?.name} size={{ xs: 12 }}>
                    <Box>
                      <FormLabel>{item?.label}</FormLabel>
                    </Box>
                    <TextField
                      fullWidth
                      select={item.type === "select"}
                      type={item.type === "select" ? undefined : item?.type}
                      multiline={item?.multiline || false}
                      rows={item?.rows || 1}
                      placeholder={item?.placeholder}
                      {...getFieldProps(item?.name)}
                      size="small"
                    >
                      {item.type === "select" &&
                        item.options?.map((option, index) => (
                          <MenuItem key={index} value={option._id}>
                            {option.name}
                          </MenuItem>
                        ))}
                    </TextField>
                  </Grid2>
                ))}
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  mt={2}
                  width={"100%"}
                >
                  <CustomButton
                    onClick={onClose}
                    backgroundColor="#C0C0C0"
                    textColor="white"
                  >
                    Cancel
                  </CustomButton>
                  <CustomButton
                    type="submit"
                    variant="contained"
                    loading={isLoading}
                  >
                    Save Expense
                  </CustomButton>
                </Stack>
              </Grid2>
            </Form>
          </FormikProvider>
        </Stack>
      </DynamicDrawer>
    );
  };
  export default CustomForm;
  const FormTitle = ({ headerText, Icon }) => {
    return (
      <Stack direction="rows" alignItems="center" py={1}>
        <Icon size={16} className="mr-2" />
        <Typography fontsize="1.2rem" fontWeight="bold">
          {headerText}
        </Typography>
      </Stack>
    );
  };