 // Function to show/hide sidebar content based on active tab
        function showSidebarContent(tabName) {
            // Hide all sidebar content
            document.querySelectorAll('.tab-sidebar-content').forEach(content => {
                content.style.display = 'none';
            });
            
            // Show the relevant sidebar content
            const activeContent = document.getElementById(tabName + '-info');
            if (activeContent) {
                activeContent.style.display = 'block';
            }
        }
        
        // Add event listeners to tab buttons
        document.addEventListener('DOMContentLoaded', function() {
            const tabButtons = document.querySelectorAll('#admissionTabs button[data-bs-toggle="tab"]');
            
            tabButtons.forEach(button => {
                button.addEventListener('shown.bs.tab', function(e) {
                    const targetTab = e.target.getAttribute('data-bs-target').replace('#', '');
                    showSidebarContent(targetTab);
                });
            });
            
            // Show undergraduate content by default
            showSidebarContent('undergraduate');
        });