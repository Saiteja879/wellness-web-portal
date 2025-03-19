
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

// Sample request data
const sampleRequests = [
  { 
    id: 1, 
    name: "Alex Johnson", 
    type: "Medical Certificate", 
    reason: "Fever - Unable to attend class", 
    date: "2023-10-15",
    status: "pending"
  },
  { 
    id: 2, 
    name: "Sarah Williams", 
    type: "Medical Certificate", 
    reason: "Migraine - Need rest", 
    date: "2023-10-14",
    status: "pending"
  },
  { 
    id: 3, 
    name: "Michael Brown", 
    type: "Prescription Renewal", 
    reason: "Asthma medication", 
    date: "2023-10-14",
    status: "pending"
  },
];

const RequestsTable = () => {
  const [requests, setRequests] = useState(sampleRequests);

  const handleApprove = (id: number) => {
    setRequests(prevRequests => 
      prevRequests.map(request => 
        request.id === id ? {...request, status: "approved"} : request
      )
    );
  };

  const handleReject = (id: number) => {
    setRequests(prevRequests => 
      prevRequests.map(request => 
        request.id === id ? {...request, status: "rejected"} : request
      )
    );
  };

  return (
    <div className="rounded-lg border bg-card">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Patient Requests</h2>
      </div>
      <div className="p-2">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-[80px]">S.No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request, index) => (
              <TableRow key={request.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{request.name}</TableCell>
                <TableCell>{request.type}</TableCell>
                <TableCell>{request.reason}</TableCell>
                <TableCell className="text-right">
                  {request.status === "pending" ? (
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleApprove(request.id)}
                        className="text-green-600 hover:text-green-700 hover:bg-green-50"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleReject(request.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <span className={request.status === "approved" ? "text-green-600" : "text-red-600"}>
                      {request.status === "approved" ? "Approved" : "Rejected"}
                    </span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RequestsTable;
