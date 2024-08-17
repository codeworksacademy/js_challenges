export function interceptConsole() {
  // Save references to the original console methods
  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;
  const originalGroup = console.group;
  const originalGroupEnd = console.groupEnd;

  // Create an element to render the console output
  const outputElement = document.createElement('div');
  outputElement.classList.add('console-output');
  document.body.appendChild(outputElement);

  // Track the current container (default is outputElement)
  let currentContainer = outputElement;

  // Utility function to determine the type of the value
  function getTypeClass(value) {
    if (typeof value === 'number') return 'console-number';
    if (typeof value === 'string') return 'console-string';
    if (typeof value === 'boolean') return 'console-boolean';
    if (typeof value === 'function') return 'console-function';
    if (value === null) return 'console-null';
    if (typeof value === 'undefined') return 'console-undefined';
    if (Array.isArray(value)) return 'console-array';
    if (typeof value === 'object') return 'console-object';
    return 'console-other';
  }

  // Helper function to create styled log entry
  function createLogEntry(args, logType, container = currentContainer, icon = '') {
    const outputContainer = document.createElement('div');
    outputContainer.classList.add('console-entry', `console-${logType}`);

    if (icon) {
      const iconSpan = document.createElement('span');
      iconSpan.classList.add('console-icon');
      iconSpan.textContent = icon;
      outputContainer.appendChild(iconSpan);
    }

    for (let i = 0; i < args.length; i++) {
      const itemTypeClass = getTypeClass(args[i]);

      if (typeof args[i] === 'string' && args[i].includes('%c')) {
        const parts = args[i].split('%c');
        parts.forEach((part, index) => {
          if (index > 0) {
            const styledSpan = document.createElement('span');
            styledSpan.style.cssText = args[++i];
            styledSpan.innerHTML = part.replace(/\n/g, '<br>'); // Respect newlines
            outputContainer.appendChild(styledSpan);
          } else {
            const textSpan = document.createElement('span');
            textSpan.classList.add(itemTypeClass);
            textSpan.innerHTML = part.replace(/\n/g, '<br>'); // Respect newlines
            outputContainer.appendChild(textSpan);
          }
        });
      } else {
        const itemSpan = document.createElement('span');
        itemSpan.classList.add(itemTypeClass);

        if (typeof args[i] === 'object') {
          // Pretty print objects and arrays
          itemSpan.textContent = JSON.stringify(args[i], null, 2);
        } else {
          itemSpan.innerHTML = String(args[i]).replace(/\n/g, '<br>'); // Respect newlines
        }

        outputContainer.appendChild(itemSpan);
      }
    }

    container.appendChild(outputContainer);
  }

  // Override console methods to capture and render output
  console.log = function (...args) {
    createLogEntry(args, 'log');
    originalLog.apply(console, args);
  };

  console.warn = function (...args) {
    createLogEntry(args, 'warn', currentContainer, '⚠️');
    originalWarn.apply(console, args);
  };

  console.error = function (...args) {
    createLogEntry(args, 'error', currentContainer, '❌');
    originalError.apply(console, args);
  };

  console.group = function (...args) {
    // Create a new <details> element for the group
    const details = document.createElement('details');
    details.classList.add('console-group');

    const summary = document.createElement('summary');

    // Render the group title only in the summary without using createLogEntry
    summary.textContent = args.map(arg => (typeof arg === 'string' ? arg : JSON.stringify(arg))).join(' ');

    details.appendChild(summary);

    // Append the new group to the current container
    currentContainer.appendChild(details);

    // Set the current container to this group's <details> element
    currentContainer = details;

    // Render any additional content (after the summary)
    createLogEntry(args, 'group-summary', details);

    originalGroup.apply(console, args);
  };

  console.groupEnd = function (...args) {
    // Set the current container back to the main output element
    currentContainer = outputElement;

    originalGroupEnd.apply(console, args);
  };
}

// // Example usage:
// interceptConsole();

// console.log(
//   '\n-------------------------------\n' +
//   '%c 🧪 %c: %c8 %c ✅ %c: %c0 %c X %c: %c8',
//   'background: black; color: yellow;', '', 'color: yellow;',
//   'background: green; color: white;', '', 'color: green;',
//   'background: red; color: white;', '', 'color: red;'
// );

// console.warn('This is a warning!\nWith a line break.', { test: 123 });
// console.error('An error occurred!\nAnother line break.', new Error('Example error'));
// console.group('Grouped logs');
// console.log('Inside a group\nwith multiple lines');
// console.warn('Warning inside a group\nwith a line break');
// console.error('Error inside a group\nwith multiple lines');
// console.groupEnd();
