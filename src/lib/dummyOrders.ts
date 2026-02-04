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
    total: 120.50,
    shippingAddress: "123 Main St, New York, NY 10001",
    paymentMethod: "Credit Card ending in 4242",
    items: [
      {
        id: 1,
        name: "Gradient Graphic T-shirt",
        price: 145,
        quantity: 1,
        image: "/images/pic1.png",
      },
    ],
  },
  {
    id: "ORD-1002",
    date: "2023-10-15",
    status: "delivered",
    total: 280.00,
    shippingAddress: "123 Main St, New York, NY 10001",
    paymentMethod: "PayPal",
    items: [
      {
        id: 2,
        name: "Polo with Tipping Details",
        price: 180,
        quantity: 1,
        image: "/images/pic2.png",
      },
       {
        id: 3,
        name: "Black Striped T-shirt",
        price: 100,
        quantity: 1,
        image: "/images/pic3.png",
      },
    ],
  },
  {
    id: "ORD-1003",
    date: "2023-09-20",
    status: "cancelled",
    total: 55.00,
    shippingAddress: "123 Main St, New York, NY 10001",
    paymentMethod: "Credit Card ending in 1234",
    items: [
       {
        id: 4,
        name: "Skinny Fit Jeans",
        price: 55,
        quantity: 1,
        image: "/images/pic4.png",
      },
    ],
  },
];
