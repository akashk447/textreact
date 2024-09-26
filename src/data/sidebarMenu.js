export const sidebarMenu = [
  {
    title: "Dashboard",
    icon: "icon-dashboard", // Placeholder for icon
    route: "/dashboard"
  },
  {
    title: "Products",
    icon: "icon-shopping-cart",
    children: [
      { title: "All Products", route: "/products/all" },
      { title: "Add New Product", route: "/products/new" },
    ]
  },
  {
    title: "Categories",
    icon: "icon-list",
    children: [
      { title: "All Categories", route: "/products/categories" },
      { title: "Add New Categories", route: "/products/stock" },
    ]
  },
  {
    title: "Orders Management",
    icon: "icon-reorder",
    children: [
      { title: "All Orders", route: "/orders/all" },
      { title: "Pending Orders", route: "/orders/pending" },
      { title: "Completed Orders", route: "/orders/completed" },
      { title: "Canceled Orders", route: "/orders/canceled" },
      { title: "Returns & Refunds", route: "/orders/returns" }
    ]
  },
  {
    title: "Customers",
    icon: "icon-user",
    children: [
      { title: "All Customers", route: "/customers/all" },
      { title: "Customer Groups", route: "/customers/groups" },
      { title: "Customer Feedback", route: "/customers/feedback" }
    ]
  },
  {
    title: "Delivery Management",
    icon: "delivery-icon",
    children: [
      { title: "Delivery Agents", route: "/delivery/agents" },
      { title: "Delivery Schedules", route: "/delivery/schedules" },
      { title: "Delivery Status", route: "/delivery/status" },
      { title: "Tracking", route: "/delivery/tracking" }
    ]
  },
  {
    title: "Promotions",
    icon: "promotions-icon",
    children: [
      { title: "All Promotions", route: "/promotions/all" },
      { title: "Discounts", route: "/promotions/discounts" },
      { title: "Coupons", route: "/promotions/coupons" },
      { title: "Loyalty Program", route: "/promotions/loyalty" }
    ]
  },
  {
    title: "Payments",
    icon: "payments-icon",
    children: [
      { title: "Payment Methods", route: "/payments/methods" },
      { title: "Payment History", route: "/payments/history" },
      { title: "Pending Payments", route: "/payments/pending" }
    ]
  },
  {
    title: "Reports",
    icon: "reports-icon",
    children: [
      { title: "Sales Report", route: "/reports/sales" },
      { title: "Inventory Report", route: "/reports/inventory" },
      { title: "Customer Report", route: "/reports/customers" },
      { title: "Delivery Report", route: "/reports/delivery" }
    ]
  },
  {
    title: "Settings",
    icon: "settings-icon",
    children: [
      { title: "Store Settings", route: "/settings/store" },
      { title: "Payment Settings", route: "/settings/payment" },
      { title: "Tax Settings", route: "/settings/tax" },
      { title: "Notification Settings", route: "/settings/notifications" },
      { title: "Themes", route: "/settings/themes" }
    ]
  },
  {
    title: "User Management",
    icon: "users-icon",
    children: [
      { title: "Admins", route: "/users/admins" },
      { title: "Roles & Permissions", route: "/users/roles" }
    ]
  },
  {
    title: "Support",
    icon: "support-icon",
    children: [
      { title: "Helpdesk", route: "/support/helpdesk" },
      { title: "FAQs", route: "/support/faqs" }
    ]
  }
];
