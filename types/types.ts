import { StaticImageData } from "next/image";
import { TableInstance, TableState } from "react-table";

/**
 * Represents a notification
 */
export interface Notification {
  id: string;
  imageUrl: StaticImageData;
  title: string;
  time: string;
}

/**
 * Represents a field in a form.
 */
export interface Field {
  name: string;
  placeHolder: string;
  type: string;
  options?: { value: string; text: string }[];
  required?: boolean;
}

/**
 * Represents a user.
 */
export interface User {
  id: string;
  username: string;
  email: string;
  emailVerified?: Date;
  role?: string;
  active?: boolean;
  lastLogin?: Date;
  profilePicture?: string;
  phoneNumber?: string;
  address?: string;
  department?: string;
  manager?: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Represents a rider.
 */
export interface Rider {
  id?: string;
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

/**
 * Represents a brand.
 */
export interface Brand {
  id?: string;
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

/**
 * Represents a contact.
 */
export interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

/**
 * Represents form data from input elements.
 */
export interface ContentFormData {
  id?: string;
  title: string;
  body: string;
  tag: "rider" | "brand";
  [key: string]: any;
}

/**
 * Represents form data for FAQs.
 */
export interface FAQFormData {
  id?: string;
  question: string;
  answer: string;
  tag: "rider" | "brand";
  [key: string]: any;
}

export type FormData = Rider | Brand | Contact | ContentFormData | FAQFormData;

/**
 * Represents a testimonial.
 */
export interface Testimonial {
  id: number;
  name: string;
  image: StaticImageData;
  quote: string;
}

/**
 * Represents a dataset for a chart.
 */
export interface Dataset {
  label: string;
  data: number[];
}

export interface ChartData {
  labels: string[];
  datasets: Dataset[];
}

/**
 * Represents a tailwind color map.
 */
export interface TailwindColorMap {
  [key: string]: string;
}

/**
 * Represents dataset for a doughnut chart.
 */
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

/**
 * Represents a campaign.
 */
export interface Campaign {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  budget: number;
  status: string;
}

/**
 * Represents campaign performance data.
 */
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

/**
 * Represents budget allocation data.
 */
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

/**
 * Represents props for ad campaign management.
 */
export interface AdCampaignManagementProps {
  campaigns: Campaign[];
}

/**
 * Represents props for table actions.
 */
export interface TableActionsProps {
  editSelectedCampaign: (id: number) => void;
  pauseSelectedCampaign: () => void;
  resumeSelectedCampaign: () => void;
  deleteSelectedCampaign: () => void;
}

/**
 * TypeScript types for DataTable
 */

/**
 * Represents a table column.
 */
export interface TableColumn {
  id: string;
  Header: string; // Header text for the column
  accessor: string; // Data accessor for the column
  isSorted?: boolean | undefined;
  isSortedDesc?: boolean | "desc" | undefined;
  width?: string; // Width of the column
  align?: "left" | "right" | "center"; // Alignment of the column content
}

/**
 * Represents a table rows.
 */
interface Rows {
  campaignId: number;
  campaignName: string;
  startDate: string;
  endDate: string;
  budget: string;
}
[];

/**
 * Represents a custom table state.
 */
export interface CustomTableState extends TableState<object> {
  pageIndex: number;
}

/**
 * Represents props for DataTable component.
 */
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

/**
 * Represents props for DataTableHeadCell component.
 */
export interface DataTableHeadCellProps {
  key: string | number;
  width?: string; // Width of the table header cell
  children: React.ReactNode; // Content of the table header cell
  sorted?: boolean | "asce" | "desc" | "none" | undefined | string; // Sorting state of the column
  align?: "left" | "right" | "center"; // Alignment of the column content
}

/**
 * Represents props for DataTableBodyCell component.
 */
export interface DataTableBodyCellProps {
  row?: any;
  key: string | number;
  noBorder: boolean | undefined;
  align?: "left" | "right" | "center"; // Alignment of the cell content
  children: React.ReactNode; // Content of the table body cell
  enableActionButtons?: boolean | undefined;
}

/**
 * Represents a table instance.
 */
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

/**
 * Represents table pagination props.
 */
export interface TablePaginationProps {
  showTotalEntries: boolean; // Indicates whether to display total entries information
  entriesStart: number; // Index of the first entry on the current page
  entriesEnd: number; // Index of the last entry on the current page
  rows: any[]; // Array of data rows
  pagination: boolean; // Indicates whether pagination controls should be rendered
  pageIndex: number; // The current page index (0-based)
  pageCount: number; // The total number of pages
  canPreviousPage: boolean; // Indicates if there's a previous page
  canNextPage: boolean; // Indicates if there's a next page
  gotoPage: (pageIndex: number) => void; // Function to navigate to a specific page
  previousPage: () => void; // Function to navigate to the previous page
  nextPage: () => void; // Function to navigate to the next page
  pageOptions: number[]; // Array of available page indices
}

/**
 * Represents a debounce function.
 */
export interface DebounceFunction {
  <T extends any[]>(callback: (...args: T) => void, delay: number): (
    ...args: T
  ) => void;
}
