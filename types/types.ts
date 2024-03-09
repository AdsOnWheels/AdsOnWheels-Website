import { StaticImageData } from "next/image";
import { ChangeEvent } from "react";
import { TableInstance, TableState } from "react-table";

export interface Field {
  name: string;
  placeHolder: string;
  type: string;
  options?: { value: string; text: string }[];
  required?: boolean;
}

/**
 * Represents form data from input elements.
 */

export interface RiderFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  cityRegion: string;
  postCode: string;
  bicycleType: string;
  cyclingDistance: string;
  bicycleCondition: string;
  imageUrl: string;
  regularRoutes: string;
  availability: string;
  interestReason: string;
  additionalComments: string;
  consent: boolean;
}

export interface BrandFormData {
  company: string;
  industry: string;
  website: string;
  postCode: string;
  title: string;
  firstName: string;
  lastName: string;
  businessEmail: string;
  phone: string;
  adType: string;
  budget: string;
  targetAudience: string;
  consent: boolean;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface ContentFormData {
  id?: string;
  title: string;
  body: string;
  tag: "rider" | "brand";
}

export interface FAQFormData {
  id?: string;
  question: string;
  answer: string;
  tag: "rider" | "brand";
}

export type FormData =
  | RiderFormData
  | BrandFormData
  | ContactFormData
  | ContentFormData
  | FAQFormData;

export interface Testimonial {
  id: number;
  name: string;
  image: StaticImageData;
  quote: string;
}

export interface Dataset {
  label: string;
  data: number[];
}

export interface ChartData {
  labels: string[];
  datasets: Dataset[];
}

// Tailwind color map (simplified example)
export interface TailwindColorMap {
  [key: string]: string;
}

export interface DoughnutChartDataset {
  label: string;
  data: number[];
  weight: number;
  tension: number;
  pointRadius: number;
  borderWidth: number;
  fill: boolean;
  backgroundColor: string[];
  hoverOffset: number;
}

export interface Campaign {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  budget: number;
  status: string;
}

export interface CampaignPerformanceData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

export interface BudgetAllocationData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

export interface AdCampaignManagementProps {
  campaigns: Campaign[];
}

export interface TableActionsProps {
  editSelectedCampaign: (id: number) => void;
  pauseSelectedCampaign: () => void;
  resumeSelectedCampaign: () => void;
  deleteSelectedCampaign: () => void;
}

// TypeScript type for DataTable

// TypeScript type for a column in the table
export interface TableColumn {
  id: string;
  Header: string; // Header text for the column
  accessor: string; // Data accessor for the column
  isSorted?: boolean | undefined;
  isSortedDesc?: boolean | "desc" | undefined;
  width?: string; // Width of the column
  align?: "left" | "right" | "center"; // Alignment of the column content
}

interface Rows {
  campaignId: number;
  campaignName: string;
  startDate: string;
  endDate: string;
  budget: string;
}
[];

export interface CustomTableState extends TableState<object> {
  pageIndex: number;
}

// TypeScript type for props of DataTable component
export interface TableProps {
  entriesPerPage: {
    defaultValue?: number; // Default number of entries per page
    entries?: number[]; // Available options for entries per page
  };
  canSearch: boolean; // Indicates if search functionality is enabled
  showTotalEntries: boolean; // Indicates if total entries count is displayed
  table: {
    columns: TableColumn[]; // Configuration for table columns
    rows: any; // Data for table rows
  };
  title?: string; // Available options for table title
  description?: string; // Available options for table description
  pagination?: any; // Additional pagination configuration (if any)
  isSorted?: boolean; // Indicates if sorting is enabled
  noEndBorder?: boolean; // Indicates if no end border is enabled
  filter?: string; // Filter to update the global filter
  onFilterChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Filter onChange function
  enableActionButtons?: boolean; // Indicates if table has no end border
}

// TypeScript type for props of DataTableHeadCell component
export interface DataTableHeadCellProps {
  key: string | number;
  width?: string; // Width of the table header cell
  children: React.ReactNode; // Content of the table header cell
  sorted?: boolean | "asce" | "desc" | "none" | undefined | string; // Sorting state of the column
  align?: "left" | "right" | "center"; // Alignment of the column content
}

// TypeScript type for props of DataTableBodyCell component
export interface DataTableBodyCellProps {
  row?: any;
  key: string | number;
  noBorder: boolean | undefined;
  align?: "left" | "right" | "center"; // Alignment of the cell content
  children: React.ReactNode; // Content of the table body cell
  enableActionButtons?: boolean | undefined;
}

export type MyTableInstance = TableInstance<object> & {
  // Define the properties you expect the table instance to have
  page: any[]; // Assuming page is an array
  pageOptions: any[]; // Assuming pageOptions is an array
  state: {
    pageIndex: number;
    pageSize: number;
    globalFilter: string;
  };
  setPageSize: (pageSize: number) => void;
  gotoPage: (pageIndex: number) => void;
  previousPage: () => void;
  nextPage: () => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  setGlobalFilter: any;
  // Add more properties if needed
};

// TypeScript type for the debounce function
export interface DebounceFunction {
  <T extends any[]>(callback: (...args: T) => void, delay: number): (
    ...args: T
  ) => void;
}
