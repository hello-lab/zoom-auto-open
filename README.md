# 📞 Zoom Auto-Reconnect Script (Node.js)

A Node.js utility that continuously monitors your system processes to check if Zoom is running, and automatically reopens a Zoom meeting via its link if it detects Zoom has closed.

---

## 📦 Features

- Monitors running processes every 10 seconds.
- Detects if **cpthost.exe** (Zoom process) is active.
- Automatically joins a specified Zoom meeting if Zoom isn’t running.
- Accepts custom meeting links from the user, or uses a default link if left blank.
- Parses **Meeting ID** and **Password** from the provided link.
- Can be exited gracefully with `Ctrl + C`.


---

## 📥 Standalone Executable

You can also download a prebuilt executable:

👉 [**Download Zoom-auto-open.exe**](https://github.com/hello-lab/zoom-auto-open/releases/download/cli/Zoom-auto-open.exe)

**Instructions:**
- Place `Zoom-auto-open.exe` in the same folder as your `Zoom.exe`.
- Running the exe will perform the same auto-reconnect behavior without Node.js.

---

## 📌 Notes

- The script is designed for **Windows** systems.
- Meeting ID and password are automatically parsed from the Zoom link.
- You can safely stop the monitoring anytime using `Ctrl + C`.

---

## 📚 Credits

Made with ❤️ using Node.js, readline, and child_process.
