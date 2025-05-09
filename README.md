Pages:https://oddnebula.github.io/d/dashboard

Team Members: 
Christopher Dick
Simon Rosenberg

Original Scope and What Was Achieved

The original goal of our project was to build a live sports statistics tracking system that supports real-time input, analytics, export, and role-based access for coaches, players, managers, and guests. We aimed to make it multi-sport capable, with user logins, editable stat sheets, and export options.

What We Achieved:

A responsive Angular frontend.

Firebase authentication.

Live stat entry with auto-save and editing capabilities.

Export to CSV and PDF reports for individual games and players.

Score calculation and visualization using Bootstrap.

What Was Not Achieved:

Full multi-sport switching (only partial framework exists).

Real-time syncing across multiple users.

Full notification system for key plays.

2. Challenges and How We Overcame Them

Challenge: Angular errors during merge of auth and stat tracking branches.
Solution: We carefully merged services and refactored components to share authService and proper observables.

Challenge: Data structure inconsistencies between components.
Solution: Standardized data models and enforced correct TypeScript typing to resolve runtime and compile-time errors.

Challenge: Firebase security rules and access.
Solution: Adjusted Firestore permissions

3. Future Work and Continuation

Our team does not plan to continue the project over the summer. While the system is functional, we consider the current state to be a solid proof of concept, and we’re choosing to focus on other commitments moving forward.

4. Video Demo Hosting

The demo video is uploaded to Google Drive. Permissions are set to “Anyone with the link can view.” It has been tested in incognito mode.
Link: https://drive.google.com/file/d/1HsIE5JOLy2ZZ3T1eMCHNcEVxYz3pNdXw/view?usp=sharing
