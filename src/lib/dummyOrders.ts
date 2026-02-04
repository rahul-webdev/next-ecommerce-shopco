export type OrderStatus = "pending" | "delivered" | "cancelled";

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  status: OrderStatus;
  items: OrderItem[];
  total: number;
  shippingAddress: string;
  paymentMethod: string;
}

export const dummyOrders: Order[] = [
  {
    id: "ORD-1001",
    date: "2023-10-25",
    status: "pending",
    total: 1499,
    shippingAddress: "B-204, Green Heights, Andheri West, Mumbai, 400053",
    paymentMethod: "Credit Card ending in 4242",
    items: [
      {
        id: 1,
        name: "Gradient Graphic T-shirt",
        price: 1499,
        quantity: 1,
        image: "/images/pic1.png",
      },
    ],
  },
  {
    id: "ORD-1002",
    date: "2023-10-15",
    status: "delivered",
    total: 2998,
    shippingAddress: "12, Park Street, Kolkata, 700016",
    paymentMethod: "UPI (PhonePe)",
    items: [
      {
        id: 2,
        name: "Polo with Tipping Details",
        price: 1999,
        quantity: 1,
        image: "/images/pic2.png",
      },
       {
        id: 3,
        name: "Black Striped T-shirt",
        price: 999,
        quantity: 1,
        image: "/images/pic3.png",
      },
    ],
  },
  {
    id: "ORD-1003",
    date: "2023-09-20",
    status: "cancelled",
    total: 799,
    shippingAddress: "Flat 4B, Kaveri Apartments, Indiranagar, Bangalore, 560038",
    paymentMethod: "Cash on Delivery",
    items: [
       {
        id: 4,
        name: "Skinny Fit Jeans",
        price: 799,
        quantity: 1,
        image: "/images/pic4.png",
      },
    ],
  },
];
