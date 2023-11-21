import { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import { saveAs } from 'file-saver';
import { Document, Page } from "@react-pdf/renderer";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const axiosSecure = useAxiosSecure()
    const { data: payment = [], refetch } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    const [selectedItem, setSelectedItem] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };



    const downloadPdf = async (item) => {
        setSelectedItem(item);
    
        const pdfContent = `Item Information:\nEmail: ${item.email}\nPrice: ${item.price}\nDate: ${item.date}`;
        console.log(pdfContent);
    
        // Create a Blob with the text content (use 'text/plain' MIME type)
        const blob = new Blob([pdfContent], { type: 'text/plain' });
    
        // Save the Blob as a file
        saveAs(blob, 'item_information.txt');
    };
    
    return (
        <div>
            <SharedTitle heading={"Payment History"} subHeading={"Checkout Payment"}></SharedTitle>
            <div className="mx-[150px] my-16">
                <h1 className="text-2xl text-amber-600 font-bold ">Total Payments: {payment.length}</h1>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Email</th>
                                    <th>Total Price</th>
                                    <th>Payment Date</th>
                                    <th>Action</th>


                                </tr>
                            </thead>
                            <tbody>
                                {/* row  */}
                                {payment.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.email}</td>
                                    <td>{item.price}</td>
                                    <td>{item.date}</td>
                                    <td className="btn bg-zinc-950 text-white" onClick={() => downloadPdf(item)}>Download</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* PDF Viewer */}
            {selectedItem && (
                <div>
                    <Document file={`data:application/pdf;base64,${btoa(selectedItem)}`} onLoadSuccess={onDocumentLoadSuccess}>
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                        ))}
                    </Document>
                </div>
            )}

        </div>
    );
};

export default PaymentHistory;