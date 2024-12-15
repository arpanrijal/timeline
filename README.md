# Timeline Web Application

This repository contains the source code for a **digital clock web application**. The application displays the current time in either a 12-hour or 24-hour format, updating dynamically in real time. The design is responsive and includes a user-friendly interface with a futuristic theme.
---
## Features

### 1. **Dynamic Clock**
- Displays the current time (hours, minutes, and seconds) in real time.
- Automatically updates every second using JavaScript.

### 2. **Switchable Time Formats**
- Provides an option to toggle between **12-hour** and **24-hour** formats.
- Displays "AM" or "PM" for the 12-hour format.

### 3. **Modern UI**
- A sleek, futuristic design featuring:
  - Dark theme background.
  - Stylish fonts sourced from Google Fonts.
  - Responsive layout adaptable to different screen sizes.

### 4. **Footer Section**
- Includes a copyright notice with a clickable link to your website.

---

## File Structure

### **HTML** (`index.html`)
The main structure of the application, defining key elements:
- **Dropdown** is used to select the time format.
- **Clock Display** to show hours, minutes, seconds, and AM/PM (if applicable).
- **Footer** with copyright information.

### **CSS** (`timestyle.css`)
Styling for the application:
- **Dark theme** with a futuristic aesthetic.
- Responsive design using `vw`, `vh`, and `flexbox` for alignment.
- Font integration from Google Fonts.

### **JavaScript** (`timefun.js`)
Handles the logic for:
1. **Real-Time Updates**:
   - Updates seconds, minutes, and hours every second.
   - Resets values as needed when limits (e.g., 60 seconds, 24 hours) are reached.

2. **Time Format Switching**:
   - Adjust the clock display to either 12-hour or 24-hour format based on user selection.
   - Dynamically updates the AM/PM indicator for the 12-hour format.

3. **Dynamic DOM Updates**:
   - Modifies the clock display in real-time using `document.getElementById`.

---

## Installation and Usage

### Prerequisites
- A web browser to view the application.

### Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/timeline
   ```
2. Navigate to the repository directory:
   ```bash
   cd timeline
   ```
3. Open `index.html` in a browser:
   ```bash
   open index.html
   ```
4. Interact with the application:
   - Observe the clock updating in real time.
   - Use the dropdown menu to switch between 12-hour and 24-hour formats.

---

## Customization

You can modify the application to suit your needs:
- **Add Date Display**: Extend the functionality to include the current date.
- **Custom Time Zones**: Users can select different time zones.
- **Styling Enhancements**: Modify the `timestyle.css` file to change the theme or fonts.

---

## Contributing
Contributions are welcome! If you find any issues or want to enhance the features:
1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push to your fork.
4. Submit a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Credits
- **Fonts**: [Google Fonts](https://fonts.google.com)
- **Developer**: [Arpan](https://www.techguruji66.com)
- **Note:**: This code may have some bugs or issues so please check before using it. Thank you!

---

For more details, visit the [official website](https://www.techguruji66.com).

