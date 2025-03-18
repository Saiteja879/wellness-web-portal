
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
import { Check, X, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  { 
    id: 4, 
    name: "Emily Davis", 
    type: "Medical Certificate", 
    reason: "Ankle sprain - Cannot participate in sports", 
    date: "2023-10-16",
    status: "pending"
  },
  { 
    id: 5, 
    name: "Robert Wilson", 
    type: "Test Results", 
    reason: "Blood test interpretation", 
    date: "2023-10-16",
    status: "pending"
  },
];

const RequestsTable = () => {
  const [requests, setRequests] = useState(sampleRequests);
  const { toast } = useToast();

  const handleApprove = (id: number) => {
    setRequests(prevRequests => 
      prevRequests.map(request => 
        request.id === id ? {...request, status: "approved"} : request
      )
    );
    
    toast({
      title: "Request Approved",
      description: "The patient has been notified.",
      variant: "default",
    });
  };

  const handleReject = (id: number) => {
    setRequests(prevRequests => 
      prevRequests.map(request => 
        request.id === id ? {...request, status: "rejected"} : request
      )
    );
    
    toast({
      title: "Request Rejected",
      description: "The patient has been notified.",
      variant: "destructive",
    });
  };

  return (
    <div className="rounded-lg border bg-card shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Patient Requests</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Review and approve patient document requests
        </p>
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
                <TableCell>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span>{request.type}</span>
                  </div>
                </TableCell>
                <TableCell>{request.reason}</TableCell>
                <TableCell className="text-right">
                  {request.status === "pending" ? (
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleApprove(request.id)}
                        className="text-green-600 hover:text-green-700 hover:bg-green-50 border-green-200"
                      >
                        <Check className="h-4 w-4 mr-1" />
                        <span className="hidden sm:inline">Approve</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleReject(request.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                      >
                        <X className="h-4 w-4 mr-1" />
                        <span className="hidden sm:inline">Reject</span>
                      </Button>
                    </div>
                  ) : (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      request.status === "approved" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }`}>
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
